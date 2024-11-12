import { protectedProcedure, router } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { prisma } from "../../utils/primsa";
import { authRouter } from "./auth";

export const appRouter = router({
    auth: authRouter,

    postProduct: protectedProcedure
        .input(z.object({ name: z.string(), description: z.string(), price: z.number(), category: z.string(), unitSize: z.string(), caseSize: z.string(), brand: z.string() }))
        .mutation(async ({ input, ctx }) => {
            const { name, description, price, category, unitSize, caseSize, brand} = input;
            const { session } = ctx;
            if (!session.user?.email) {
                throw new TRPCError({ code: 'UNAUTHORIZED' });
            }

            const product = await prisma.product.create({
                data: {
                    name,
                    description,
                    category,
                    price,
                    unitSize,  
                    caseSize,
                    brand,

                }
            });
            return product;
        })