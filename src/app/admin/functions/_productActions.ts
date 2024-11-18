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

export async function createCategory(formData: {
  name: string;
  description: string;
  // parentId: string;
  imageUrl: string;
}) {
  try {
    const result = await prisma.category.create({
      data: {
        name: formData.name,
        description: formData.description,
        // parentId: formData.parentId,
        imageUrl: formData.imageUrl,
      },
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: 'Failed to create category' };
  }
}

export async function createProduct(formData: {
  name: string;
  description: string;
  price: number;
  categoryId: string;
  unitSize: string;
  caseSize: string;
  brandId: string;
  imageUrl: string;
  status: 'ACTIVE' | 'DRAFT' | 'ARCHIVED';
}) {
  try {
    const result = await prisma.product.create({
      data: {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        categoryId: formData.categoryId,
        unitSize: formData.unitSize,
        caseSize: formData.caseSize,
        brandId: formData.brandId,
        imageUrl: formData.imageUrl,
        status: formData.status,
      },
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: 'Failed to create product' };
  }
}

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany();
    return { success: true, data: categories };
  } catch (error) {
    return { success: false, error: 'Failed to fetch categories' };
  }
}

export async function getBrands() {
  try {
    const brands = await prisma.brand.findMany();
    return { success: true, data: brands };
  } catch (error) {
    return { success: false, error: 'Failed to fetch brands' };
  }
}

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      include: {
        brand: true,
        category: true
      }
    });
    return { success: true, data: products };
  } catch (error) {
    return { success: false, error: 'Failed to fetch products' };
  }
}
