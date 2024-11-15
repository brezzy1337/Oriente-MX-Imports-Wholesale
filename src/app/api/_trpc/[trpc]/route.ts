import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createTRPCContext } from '@/utils/trpc/trpc.context';
import { appRouter } from '@/server/router/_app';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: async (opts) => {
      const ctx = await createTRPCContext({
        ...opts,
        req: opts.req as any,
        res: new Response() as any,
      });
      return ctx;
    },
  });
      
  export { handler as GET, handler as POST };