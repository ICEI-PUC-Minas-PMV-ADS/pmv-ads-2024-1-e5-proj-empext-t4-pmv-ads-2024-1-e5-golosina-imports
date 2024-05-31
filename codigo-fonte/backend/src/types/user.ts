export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthUserResponse {
  user: User,
  token: string
}
