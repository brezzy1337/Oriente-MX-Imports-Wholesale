import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "../utils/primsa"
import Credentials from "next-auth/providers/credentials"
import { findUser, validatePassword } from "../lib/auth/auth"

import { type GetServerSidePropsContext } from "next";
import {
    getServerSession,
    type DefaultSession,
    type NextAuthOptions,
} from "next-auth";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            credentials: {
                email: { type: "text", label: "Email" },
                password: { type: "password", label: "Password" },
            },
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required.")
                }

                const user = await findUser(credentials.email as string)
                if (user) {
                    const isValid = await validatePassword(user, credentials.password as string)
                    if (!isValid) {
                        throw new Error("Invalid password.")
                    }
                    return user
                }
                throw new Error("User not found.")
            },
        }),
        // GoogleProvider({
        //     clientId: getGoogleCredentials().clientId,
        //     clientSecret: getGoogleCredentials().clientSecret,
        // })

        /**
       * ...add more providers here.
       *
       * Most other providers require a bit more work than the Discord provider. For example, the
       * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
       * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
       *
       * @see https://next-auth.js.org/providers/github
       */
    ],
    callbacks: {
        jwt: async ({ token, user }: { token: any; user: any }) => {
            if (user) {
                // token.id = user.id
                token.email = user.email;
            }
            console.log('JWT Callback - Token:', token);
            return token
        },
        session: async ({ session, token }: { session: any; token: any }) => {
            if (token && token.id && token.email) {
                // session.user.id = token.id
                session.user.email = token.email
            } else {
                console.log('Session Callback - Token decryption issue:', token);
            }
            console.log('Session Callback - Session:', session);
            return session
        },
    },
    pages: {
        signIn: '/admin',
    },
    session: {
        strategy: 'jwt' as const,
    },
};

/**
* Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
*
* @see https://next-auth.js.org/configuration/nextjs
*/
export const getServerAuthSession = (ctx: {
    req: GetServerSidePropsContext["req"];
    res: GetServerSidePropsContext["res"];
}) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
};
