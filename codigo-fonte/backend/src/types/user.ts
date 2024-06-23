export interface User {
  id: string;
  name: string;
  email: string;
  admin?: boolean;
  deletionTime?: Date;
}

export interface AuthUserResponse {
  user: User,
  token: string
}
