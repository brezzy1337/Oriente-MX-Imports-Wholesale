import { protectedProcedure, router } from "../trpc";
import { createCallerFactory } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { prisma } from "../../utils/primsa";
import { authRouter } from "./auth";

export const appRouter = router({
    auth: authRouter,

    postBrand: protectedProcedure
        .input(z.object({
            name: z.string(),
            description: z.string().optional(),
            logoUrl: z.string().optional()
        }))
        .mutation(async ({ input, ctx }) => {
            const { session } = ctx;
            if (!session.user?.email) {
                throw new TRPCError({ code: 'UNAUTHORIZED' });
            }

            const brand = await prisma.brand.create({
                data: input
            });
            return brand;
        }),

    postCategory: protectedProcedure
        .input(z.object({
            name: z.string(),
            description: z.string().optional(),
            parentId: z.string().optional()
        }))
        .mutation(async ({ input, ctx }) => {
            const { session } = ctx;
            if (!session.user?.email) {
                throw new TRPCError({ code: 'UNAUTHORIZED' });
            }

            const category = await prisma.category.create({
                data: input
            });
            return category;
        }),

    postProduct: protectedProcedure
        .input(z.object({
            name: z.string(),
            description: z.string().optional(),
            price: z.number().optional(),
            categoryId: z.string(),
            unitSize: z.string(),
            caseSize: z.string(),
            brandId: z.string(),
            imageUrl: z.string().optional(),
            status: z.enum(['ACTIVE', 'DRAFT', 'ARCHIVED']).default('ACTIVE')
        }))

        .mutation(async ({ input, ctx }) => {
            const { session } = ctx;
            if (!session.user?.email) {
                throw new TRPCError({ code: 'UNAUTHORIZED' });
            }

            const { categoryId, brandId, ...restInput } = input;
            const product = await prisma.product.create({
                data: {
                    ...restInput,
                    editor: {
                        connect: {
                            email: session.user.email
                        }
                    },
                    brand: {
                        connect: {
                            id: brandId
                        }
                    },
                    category: {
                        connect: {
                            id: categoryId
                        }
                    }
                },
                include: {
                    brand: true,
                    category: true,
                }
            });
            return product;
        })
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;import { router } from '../trpc';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { prisma } from '@/lib/prisma';

export const appRouter = router({
  // Product routes
  getProducts: publicProcedure.query(async () => {
    return prisma.product.findMany({
      include: {
        brand: true,
        category: true,
      },
    });
  }),

  deleteProduct: publicProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      return prisma.product.delete({
        where: { id: input },
      });
    }),

  // Brand routes
  getBrands: publicProcedure.query(async () => {
    return prisma.brand.findMany({
      include: {
        products: true,
      },
    });
  }),

  deleteBrand: publicProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      return prisma.brand.delete({
        where: { id: input },
      });
    }),

  // Category routes
  getCategories: publicProcedure.query(async () => {
    return prisma.category.findMany({
      include: {
        products: true,
      },
    });
  }),

  deleteCategory: publicProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      return prisma.category.delete({
        where: { id: input },
      });
    }),
});

export type AppRouter = typeof appRouter;
