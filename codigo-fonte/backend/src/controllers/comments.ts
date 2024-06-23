import { Request, Response, NextFunction } from 'express';
import CommentModel from "../models/comment";
import { ErrorReason, ErrorStatusCodes } from '../types/error';
import { AppError } from '../error';
import { Comment, FormattedComment } from '../types/comment';
import UserModel from '../models/user';
import FeedbackModel from '../models/feedback';
import { Feedback } from '../types/feedback';

interface CreateFeedbackRequest {
    personName: string;
    content: string;
}

interface CreateCommentRequest {
    userId: string;
    postId: string;
    content: string;
}

interface DeleteCommentRequest {
    userId: string;
    commentId: string;
}

interface DeleteFeedbackRequest {
    userId: string;
    feedbackId: string;
}

export const deleteComment = async (request: Request, response: Response<{}>, next: NextFunction) => {
    const { userId, commentId } = request.body as DeleteCommentRequest;
    if (!userId || !commentId) {
        throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST);
    }
    try {
        const user = await UserModel.findById(userId);
        if (!user.admin) {
            return response.status(401);
        }
        await CommentModel.findByIdAndDelete(commentId);

        return response.status(200).json({});
    } catch (error) {
        console.error(error);
        next(error)
    }
};

export const deleteFeedback = async (request: Request, response: Response<{}>, next: NextFunction) => {
    const { userId, feedbackId } = request.body as DeleteFeedbackRequest;
    if (!userId || !feedbackId) {
        throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST);
    }
    try {
        const user = await UserModel.findById(userId);
        if (!user.admin) {
            return response.status(401);
        }
        await FeedbackModel.findByIdAndDelete(feedbackId);

        return response.status(200).json({});
    } catch (error) {
        console.error(error);
        next(error)
    }
};

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

export const createFeedback = async (request: Request, response: Response<Feedback>, next: NextFunction) => {
    const { personName, content } = request.body as CreateFeedbackRequest;
    if (!content) {
        throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST);
    }
    try {
        const feedback = new FeedbackModel({ personName, content, createTime: new Date });

        let newFeedback = await feedback.save();

        return response.status(201).json({
            id: newFeedback._id,
            personName: newFeedback.personName,
            createTime: newFeedback.createTime,
            content: newFeedback.content
        });
    } catch (error) {
        console.error(error);
        next(error)
    }
};

interface GetFeedbacksResponse {
    feedbacks: Array<Feedback>
}

export const getFeedbacks = async (_: Request, response: Response<GetFeedbacksResponse>, next: NextFunction) => {
    try {
        const feedbacks = await FeedbackModel.find({});

        return response.status(200).json({ feedbacks });
    } catch (error) {
        console.error(error);
        next(error)
    }
};


interface GetPostCommentsResponse {
    comments: Array<FormattedComment>
}

export const getPostComments = async (request: Request, response: Response<GetPostCommentsResponse>, next: NextFunction) => {
    const { postId } = request.params;
    if (!postId) {
        throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST);
    }
    try {
        const comments = await CommentModel.find().where('postId').equals(postId);
        const formattedComments: Array<FormattedComment> = await Promise.all(comments.map(async (comment) => {
            const user = await UserModel.findById(comment.userId).exec();
            const author = user ? user.name : "Usuário deletado";

            return {
                id: comment.id,
                author,
                userId: comment.userId,
                postId: comment.postId,
                content: comment.content,
                createTime: comment.createTime,
                deleteTime: comment.deleteTime
            }
        }));

        return response.status(200).json({ comments: formattedComments });
    } catch (error) {
        console.error(error);
        next(error)
    }
};
