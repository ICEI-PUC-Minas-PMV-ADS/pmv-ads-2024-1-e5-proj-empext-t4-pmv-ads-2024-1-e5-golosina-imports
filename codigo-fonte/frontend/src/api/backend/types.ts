export interface ApiResponse<T> {
  status: number
  data: T
}

export interface RegisterUserPayload {
  name: string
  email: string
  password: string
}

export interface LoginUserPayload {
  email: string
  password: string
}

export interface User {
  id: string
  name: string
  email: string   
}

export interface CreateUserResponse {
    user: User,
    token: string
}
