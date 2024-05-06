'use server';
import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { LoginUserPayload } from './api/backend/types';

// Action to authenticate the user. Needs to be an action because server stuff 
export async function authenticate(
  payload: LoginUserPayload,
) {
  try {
    await signIn('credentials', payload);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function logout() {
  try {
    await signOut({ redirectTo: "/produtos" });
  } catch (error) {
    console.log(error)
  }
}