import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { LoginUserPayload, loginUser } from './api/backend/controllers/user';
import { authConfig } from './auth.config';

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    let { user } = await loginUser(credentials as LoginUserPayload)
                    return user as User // SAFETY: both types have the same fields
                } catch (err) {
                    // Another error not related to the request happened
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
