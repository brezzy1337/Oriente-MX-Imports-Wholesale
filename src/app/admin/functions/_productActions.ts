'use server'

import { z } from 'zod';
import { protectedProcedure } from '@/server/trpc';

export const createProduct = protectedProcedure
.input(
    z.object({
        
    })
)