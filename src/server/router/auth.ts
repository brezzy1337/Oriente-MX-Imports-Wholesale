import { z } from "zod";
import { publicProcedure, router, protectedProcedure } from "../trpc";
import { signIn } from "next-auth/react";
import { createUser, validatePassword} from "../../lib/auth/auth";
import { TRPCError } from "@trpc/server";

export const authRouter = router({

    signup: publicProcedure
        .input(z.object({ 
            email: z.string().email(), 
            password: z.string().min(6), 
            name: z.string(), 
            role: z.enum(['EMPLOYEE', 'ADMIN']).optional(),
        }))
        .mutation(async ({ input, ctx }) => {
            try {
                const { email, password, name, role } = input;

                const existingUser = await ctx.prisma.user.findUnique({
                    where: { email: email },
                });

                if (existingUser) {
                    throw new TRPCError({
                        code: 'CONFLICT',
                        message: 'A user with this email already exists',
                    });
                }

                const user = await createUser(email, password, name, role);

                const result = await signIn('credentials', {
                    redirect: false,
                    email: email,
                    password: password,
                });

                if (!result || result.error) {
                    throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Error signing in after signup' });
                }

                return { success: true, user: { id: user.id, email: user.email, name: user.name } };
            }
            catch (error) {
            }
        }),

    login: publicProcedure
        .input(z.object({ email: z.string().email(), password: z.string() }))
        .mutation(async ({ input, ctx }) => {
            const result = await signIn('credentials', {
                redirect: false,
                email: input.email,
                password: input.password,
            });

            if (!result) {
                throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Invalid credentials' });
            }

            if (result.error) {
                throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Invalid credentials' });
            }

            return { success: true };
        }),
});
