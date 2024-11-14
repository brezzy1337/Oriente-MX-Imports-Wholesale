import { initTRPC, TRPCError } from '@trpc/server';
import { Context } from '../utils/trpc/trpc.context';
import superjson from 'superjson';

const t = initTRPC.context<Context>().create({
  transformer: superjson
});

const isAuthenticated = t.middleware(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      ...ctx,
      session: ctx.session,
    },
  });
});

// const isEmployee = t.middleware(({ ctx, next }) => {
//   if (!ctx.session?.user) {
//     throw new TRPCError({ code: 'UNAUTHORIZED' });
//   }
  
//   if ((ctx.session.user as { role?: string }).role !== 'EMPLOYEE' && (ctx.session.user as { role?: string }).role !== 'ADMIN') {
//     throw new TRPCError({ code: 'FORBIDDEN' });
//   }
  
//   return next({
//     ctx: {
//       ...ctx,
//       session: ctx.session,
//     },
//   });
// });

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthenticated);
// export const employeeProcedure = t.procedure.use(isEmployee);