import { Request, Response, NextFunction } from 'express';
import CommentModel from "../models/comment";
import { ErrorReason, ErrorStatusCodes } from '../types/error';
import { AppError } from '../error';
import { Comment } from '../types/comment';

interface CreateCommentRequest {
    user_id: string;
    post_id: string;
    content: string;
}

export const createComment = async (request: Request, response: Response<Comment>, next: NextFunction) => {
    const { user_id, post_id, content } = request.body as CreateCommentRequest;
    if (!user_id || !post_id || !content) {
        throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST);
    }
    try {
        const comment = new CommentModel({ user_id, post_id, content, create_time: new Date });

        let newComment = await comment.save();

        return response.status(201).json({
            id: newComment._id,
            user_id: newComment.user_id,
            post_id: newComment.post_id,
            content: newComment.content,
            create_time: newComment.create_time,
            delete_time: newComment.delete_time
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
    const { post_id } = request.params;
    if (!post_id) {
        throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST);
    }
    try {
        const comments = await CommentModel.find().where('post_id').equals(post_id);

        return response.status(200).json({ comments });
    } catch (error) {
        console.error(error);
        next(error)
    }
};

