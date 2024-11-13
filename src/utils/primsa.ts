import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const extendedPrismaClientSingleton = () => {
  return new PrismaClient().$extends({
    query: {
      $allOperations({ operation, model, args, query }) {
        const start = performance.now();
        return query(args).finally(() => {
          const end = performance.now();
        });
      },
    },
  });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;
type ExtendedPrismaClientSingleton = ReturnType<typeof extendedPrismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
  extendedPrisma: ExtendedPrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();
export const extendedPrisma = globalForPrisma.extendedPrisma ?? extendedPrismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
  globalForPrisma.extendedPrisma = extendedPrisma;
}

export async function initializePrisma() {
  try {
    await prisma.$connect();
  } catch (error) {
    process.exit(1);
  }
}

export function getPrismaClient() {
  return prisma;
}

export function getExtendedPrismaClient() {
  return extendedPrisma;
}