import NextAuth, { User } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { LoginUserPayload, loginUser } from './api/backend/controllers/user';
import { redirect } from 'next/navigation';

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            // formData
            credentials: {
                username: { label: "email" },
                password: { label: "password", type: "password" },
            },
            authorize: async (credentials, req) => {
                try {
                    let { user }  = await loginUser(credentials as LoginUserPayload)
                    return user as User // SAFETY: both types have the same fields
                } catch (err) {
                    alert(err)
                    console.error(err)
                    // TODO: handle properly https://github.com/nextauthjs/next-auth/discussions/9389
                    throw err
                }
            },
        }),
    ],
    /**
     * This property contains the session strategy, which means how our app will 
     * verify if an user has a valid session. Here we'll be using a JWT returned from the API.
     */
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
});