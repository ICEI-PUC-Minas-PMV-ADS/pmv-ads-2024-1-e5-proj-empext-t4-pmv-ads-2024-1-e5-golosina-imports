import { instance } from "../config"
import { CreateFeedbackRequest, Feedback, GetPostCommentsResponse, LoginUserPayload } from "../types"

export async function createFeedback(payload: CreateFeedbackRequest) {
    try {
        const { data: feedback } = await instance.post<Feedback>(`/feedbacks/`, payload);
        return feedback
    } catch (error) {
        throw error
    }
}

export async function getPostComments(postId: string) {
    try {
        const {
            data: { comments },
        } = await instance.get<GetPostCommentsResponse>(`/comments/${postId}`)
        return comments
    } catch (error) {
        throw error
    }
}

export type { LoginUserPayload }

