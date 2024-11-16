'use server'

import { prisma } from "@/utils/primsa";

export async function createBrand(formData: {
        name: string;
        description: string;
        logoUrl: string;
}) {
        try {
          const result = await prisma.brand.create({
            data: {
              name: formData.name,
              description: formData.description,
              logoUrl: formData.logoUrl,
            },
          });
          return { success: true, data: result };
        } catch (error) {
          return { success: false, error: 'Failed to create brand' };
        }
}