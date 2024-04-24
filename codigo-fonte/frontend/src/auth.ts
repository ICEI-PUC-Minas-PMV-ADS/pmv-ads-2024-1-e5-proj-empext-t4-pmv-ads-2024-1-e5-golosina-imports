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
                username: { label: "username" },
                password: { label: "password", type: "password" },
            },
            authorize: async (credentials, req) => {
                console.log(req)
                try {
                    let user = await loginUser(credentials as LoginUserPayload)
                    console.log(user)
                    return user as User // both types have the same fields
                } catch (err) {
                    console.error(err)
                    throw err
                }
            },
        }),
    ],
    // TODO
    // // Set the jwt configuration.
    // session: {
    //     strategy: "jwt",
    //     maxAge: 30 * 24 * 60 * 60, // 30 days
    // },
});