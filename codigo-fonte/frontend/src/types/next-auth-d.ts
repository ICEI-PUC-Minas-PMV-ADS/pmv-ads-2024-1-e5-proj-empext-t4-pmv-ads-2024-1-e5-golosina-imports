import { DefaultSession } from "next-auth";
/**
 * Extending the types here because this lib kinda sucks
 */

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** Oauth access token */
            token?: string;
        } & DefaultSession["user"];
    }

    interface User {
        id?: string
        name?: string | null
        email?: string | null
        image?: string | null
        token?: string | null
        admin?: boolean
    }

    interface JWT {
        raw: string;
    }
}
