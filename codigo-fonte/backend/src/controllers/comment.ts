import { Request, Response, NextFunction } from 'express';
import CommentModel from "../models/comment";
import { ErrorReason, ErrorStatusCodes } from '../types/error';
import { AppError } from '../error';
import { Comment } from '../types/comment';

interface CreateCommentRequest {
    userId: string;
    postId: string;
    content: string;
}

export const createComment = async (request: Request, response: Response<Comment>, next: NextFunction) => {
    const { postId } = request.params;
    const { userId, content } = request.body as CreateCommentRequest;
    if (!userId || !postId || !content) {
        throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST);
    }
    try {
        const comment = new CommentModel({ userId, postId, content, createTime: new Date });

        let newComment = await comment.save();

        return response.status(201).json({
            id: newComment._id,
            userId: newComment.userId,
            postId: newComment.postId,
            content: newComment.content,
            createTime: newComment.createTime,
            deleteTime: newComment.deleteTime
        });
    } catch (error) {
        console.error(error);
        next(error)
    }
};

interface PostCommentsResponse {
    comments: Array<Comment>
}

export const getPostComments = async (request: Request, response: Response<PostCommentsResponse>, next: NextFunction) => {
    const { postId } = request.params;
    if (!postId) {
        throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST);
    }
    try {
        const comments = await CommentModel.find().where('postId').equals(postId);

        return response.status(200).json({ comments });
    } catch (error) {
        console.error(error);
        next(error)
    }
};

