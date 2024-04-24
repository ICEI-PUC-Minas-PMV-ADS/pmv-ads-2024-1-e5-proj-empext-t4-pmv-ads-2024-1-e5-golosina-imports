import type { NextAuthConfig, User } from 'next-auth';
import { AuthUserResponse } from './api/backend/controllers/user';
const { AUTH_SECRET } = process.env;

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    /**
     * Guard the protected pages and redirect the user to login page if not authenticated.
     */
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      console.log("user:", auth?.user);
      const isOnDashboard = nextUrl.pathname.startsWith('/perfil');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/perfil', nextUrl));
      }
      return true;
    },
    /**
     * Receives the user returned from the signIn function. This is triggered every time a user logs in
     * @param {AuthUserResponse} user
     */
    // jwt: async ({ token, user }) => {
    //   if (user) {
    //     // TODO
    //    return token 
    //   }
    // }
  },
  providers: [],
  secret: AUTH_SECRET,
} satisfies NextAuthConfig;