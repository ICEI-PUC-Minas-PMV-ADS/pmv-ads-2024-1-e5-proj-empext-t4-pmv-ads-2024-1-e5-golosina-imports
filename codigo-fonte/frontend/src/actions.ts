'use server';
import { signIn, signOut } from '@/auth';
import { CreateCommentRequest, LoginUserPayload } from './api/backend/types';
import { createComment as createCommentApi } from './api/backend/controllers/comment';
// Action to authenticate the user. Needs to be an action because server stuff 
export async function authenticate(
  payload: LoginUserPayload,
) {
  try {
    const { email, password } = payload;
    const res = await signIn('credentials', { email, password, redirectTo: '/produtos' });
    return res
  } catch (error) {
    throw error;
  }
}

export async function logout() {
  try {
    await signOut({ redirectTo: "/produtos" });
  } catch (error) {
    console.log(error)
    throw error
  }
}

export async function createComment(payload: CreateCommentRequest, postId: string, token: string) {
  try {
    await createCommentApi(payload, postId, token);
  } catch (e) {
    // TODO: better error handling.
    throw e
  }
};
