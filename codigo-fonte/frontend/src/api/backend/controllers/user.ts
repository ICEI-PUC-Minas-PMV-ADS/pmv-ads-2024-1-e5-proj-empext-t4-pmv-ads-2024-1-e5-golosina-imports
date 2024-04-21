import { instance } from "../config"
import { CreateUserResponse, LoginUserPayload, RegisterUserPayload } from "../types"

export async function loginUser(payload: LoginUserPayload) {
    try {
        const {
            data: { token },
        } = await instance.post<{ token: string }>('/login', payload)
        return token
    } catch (error) {
        throw error
    }
}

export async function registerUser(payload: RegisterUserPayload) {
    try {
        const {
            data: { token },
        } = await instance.post<CreateUserResponse>('/user/', payload)
        return token
    } catch (error) {
        throw error
    }
}

export type { LoginUserPayload }
