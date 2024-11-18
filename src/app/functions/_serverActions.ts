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
  // price: number;
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
        // price: formData.price,
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
    const categories = await prisma.category.findMany({
      include: {
        products: true
      }
    });
    return { success: true, data: categories };
  } catch (error) {
    return { success: false, error: 'Failed to fetch categories' };
  }
}

export async function getBrands() {
  try {
    const brands = await prisma.brand.findMany({
      include: {
        products: true
      }
    });
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

export async function updateBrand(id: string, formData: {
  name: string;
  description: string;
  logoUrl: string;
}) {
  try {
    const result = await prisma.brand.update({
      where: { id },
      data: {
        name: formData.name,
        description: formData.description,
        logoUrl: formData.logoUrl,
      },
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: 'Failed to update brand' };
  }
}

export async function getBrandProducts(brandId: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        brandId: brandId
      },
      include: {
        brand: true,
        category: true
      }
    });
    return { success: true, data: products };
  } catch (error) {
    return { success: false, error: 'Failed to fetch brand products' };
  }
}

export async function getCategoryProducts(categoryId: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        categoryId: categoryId
      },
      include: {
        brand: true,
        category: true
      }
    });
    return { success: true, data: products };
  } catch (error) {
    return { success: false, error: 'Failed to fetch category products' };
  }
}

export async function deleteProduct(id: string): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    const result = await prisma.product.delete({
      where: { id },
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: 'Failed to delete product' };
  }
}

export async function deleteCategory(id: string): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    const hasProducts = await prisma.product.findFirst({
      where: { categoryId: id },
    });

    if (hasProducts) {
      return { success: false, error: 'Cannot delete category with associated products' };
    }

    const result = await prisma.category.delete({
      where: { id },
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: 'Failed to delete category' };
  }
}

export async function deleteBrand(id: string): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    const hasProducts = await prisma.product.findFirst({
      where: { brandId: id },
    });

    if (hasProducts) {
      return { success: false, error: 'Cannot delete brand with associated products' };
    }

    const result = await prisma.brand.delete({
      where: { id },
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: 'Failed to delete brand' };
  }
}