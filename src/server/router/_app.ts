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
      logoUrl: z.string().optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      const { session } = ctx;
      if (!session.user?.email) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
      }

      const brand = await prisma.brand.create({
        data: {
          name: input.name,
          description: input.description,
          logoUrl: input.logoUrl,
        },
      });
      return brand;
    }),

  postCategory: protectedProcedure
    .input(z.object({
      name: z.string(),
      description: z.string().optional(),
      parentId: z.string().optional(),
      imageUrl: z.string().optional()
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
    }),

  getProducts: protectedProcedure.query(async () => {
    return prisma.product.findMany({
      include: {
        brand: true,
        category: true,
      },
    });
  }),

  deleteProduct: protectedProcedure 
    .input(z.string())
    .mutation(async ({ input }) => {
      return prisma.product.delete({
        where: { id: input },
      });
    }),

  // Brand routes
  getBrands: protectedProcedure.query(async () => {
    return prisma.brand.findMany({
      include: {
        products: true,
      },
    });
  }),

  deleteBrand: protectedProcedure 
    .input(z.string())
    .mutation(async ({ input }) => {
      return prisma.brand.delete({
        where: { id: input },
      });
    }),

  // Category routes
  getCategories: protectedProcedure.query(async () => {
    return prisma.category.findMany({
      include: {
        products: true,
      },
    });
  }),

  deleteCategory: protectedProcedure 
    .input(z.string())
    .mutation(async ({ input }) => {
      return prisma.category.delete({
        where: { id: input },
      });
    }),
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
