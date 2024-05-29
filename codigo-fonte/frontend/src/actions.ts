'use server';
import { signIn, signOut } from '@/auth';
import { LoginUserPayload } from './api/backend/types';

// Action to authenticate the user. Needs to be an action because server stuff 
export async function authenticate(
  payload: LoginUserPayload,
) {
  try {
    const { email, password } = payload;
    const res = await signIn('credentials', { email, password });
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