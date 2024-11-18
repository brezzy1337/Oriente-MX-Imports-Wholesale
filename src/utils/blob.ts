import { PutBlobResult } from '@vercel/blob';

export async function uploadToBlob(file: File): Promise<PutBlobResult> {
  const response = await fetch(`/api/upload?filename=${file.name}`, {
    method: 'POST',
    body: file,
  });

  if (!response.ok) {
    throw new Error('Failed to upload to Vercel Blob');
  }

  return response.json();
}

export function getBlobUrl(url: string | null): string {
  if (!url) return '/images/placeholder.jpg';
  
  // Handle full URLs (including Vercel Blob URLs)
  if (url.startsWith('http')) return url;
  
  // Handle URLs that already include /images/
  if (url.startsWith('/images/')) return url;
  
  // Handle relative paths
  return `/images/${url.replace(/^\/+/, '')}`;
}
