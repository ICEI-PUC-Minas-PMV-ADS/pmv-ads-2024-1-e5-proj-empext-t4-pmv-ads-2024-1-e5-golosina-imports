import NextAuth, { User } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { LoginUserPayload, loginUser } from './api/backend/controllers/user';

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
                    console.log(user)
                    return user as User // both types have the same fields
                } catch (err) {
                    console.error(err)
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