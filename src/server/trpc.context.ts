import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { prisma } from '../utils/primsa';
import { getServerAuthSession } from './auth';
import { Session } from 'next-auth';

// import type { NextApiRequest, NextApiResponse } from '@trpc/server/adapters/next'; 

export type CreateContextOptions = {
  session: Session | null;
  // res: NextApiResponse, 
  // req: NextApiRequest
};

/**
 * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
 * it from here.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
 */

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    // res: opts.res,
    // req: opts.req,
    prisma,
  };
};

/**
 * This is the actual context you will use in your router. It will be used to process every request
 * that goes through your tRPC endpoint.
 *
 * @see https://trpc.io/docs/context
 */
export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  // Get the session from the server using the getServerSession wrapper function
  const session = await getServerAuthSession({ req, res });

  return createInnerTRPCContext({
    session,
    // res,
    // req
  });
};

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
