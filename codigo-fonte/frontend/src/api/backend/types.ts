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

export interface CreateUserResponse {
  user: {
    name: string
    email: string
    password: string
    habits: []
    _id: string
    __v: number
  }
  token: string
}
