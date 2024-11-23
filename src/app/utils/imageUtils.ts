export function getFilenameFromUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    // Extract filename from path, handling both /filename.jpg and /path/to/filename.jpg
    const filename = pathname.split('/').pop() || '';
    // If no filename found, generate a timestamp-based one
    return filename || `image-${Date.now()}.jpg`;
  } catch {
    // If URL parsing fails, return a timestamp-based filename
    return `image-${Date.now()}.jpg`;
  }
}

export async function uploadToVercelBlob(file: File, existingUrl: string): Promise<string> {
  try {
    // Get filename from existing URL or use the original filename
    const filename = getFilenameFromUrl(existingUrl) || file.name;
    
    // Create form data for upload
    const formData = new FormData();
    formData.append('file', file);

    // Upload to Vercel Blob API
    const response = await fetch(`/api/upload?filename=${encodeURIComponent(filename)}`, {
      method: 'POST',
      body: file
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const blob = await response.json();
    return blob.url;
  } catch (error) {
    console.error('Error uploading to Vercel Blob:', error);
    throw error;
  }
}
