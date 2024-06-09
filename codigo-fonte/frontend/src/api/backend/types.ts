export interface User {
  id: string
  name: string
  email: string
}

export interface Comment {
  id: string;
  userId: string;
  author: string;
  postId: string;
  content: string;
  createTime: Date;
  deleteTime?: Date;
}

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
  user: User,
  token: string
}

export interface GetPostCommentsResponse {
  comments: Array<Comment>
}

export interface CreateCommentRequest {
  content: string;
  userId: string
}
