import { formatHeader, instance } from "../config"
import { CreateCommentRequest, GetPostCommentsResponse, LoginUserPayload } from "../types"

export async function createComment(payload: CreateCommentRequest, postId: string, token: string) {
    try {
        const headers = formatHeader(token);
        const { data: comment } = await instance.post<Comment>(`/comments/${postId}`, payload, headers);
        return comment
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
