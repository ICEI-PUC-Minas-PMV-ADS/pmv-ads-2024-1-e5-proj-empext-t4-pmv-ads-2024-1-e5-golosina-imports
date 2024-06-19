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

interface GetFeedbacksResponse {
    feedbacks: Array<Feedback>
}

export async function getFeedbacks() {
    try {
        const {
            data: { feedbacks },
        } = await instance.get<GetFeedbacksResponse>(`/feedbacks/`)
        return feedbacks
    } catch (error) {
        throw error
    }
}

export type { LoginUserPayload }

