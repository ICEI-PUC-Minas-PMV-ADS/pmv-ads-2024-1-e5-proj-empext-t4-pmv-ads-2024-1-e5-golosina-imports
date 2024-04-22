import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { LoginUserPayload, loginUser } from './api/backend/controllers/user';

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: { email: {}, password: {} },
            authorize: async (credentials) => {
                try {
                    let user = await loginUser(credentials as LoginUserPayload)
                    console.log(user)
                    return user
                } catch (err) {
                    console.error(err)
                    throw err
                }
            },
        }),
    ],
});