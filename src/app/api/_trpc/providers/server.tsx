// import 'server-only'; // <-- ensure this file cannot be imported from the client
// import { createHydrationHelpers } from '@trpc/react-query/rsc';
// import { cache } from 'react';
// import { createCaller } from '@/server/router/_app';
// import { createTRPCContext } from '@/utils/trpc/trpc.context';
// import { makeQueryClient } from '@/utils/trpc/query-client';
// import { appRouter } from '@/server/router/_app';

//  // IMPORTANT: Create a stable getter for the query client that
// //            will return the same client during the same request.
// const getQueryClient = cache(makeQueryClient);
// export default getQueryClient;
// const caller = createCaller(createTRPCContext);

// export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
//   caller,
//   getQueryClient,
// );