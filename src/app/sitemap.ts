import type { MetadataRoute } from 'next';
import { execSync } from 'child_process';

function gitDate(filePath: string): Date {
  try {
    const iso = execSync(`git log -1 --format="%cI" -- "${filePath}"`, {
      encoding: 'utf8',
      cwd: process.cwd(),
    }).trim();
    return iso ? new Date(iso) : new Date();
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://wrappedether.org',
      lastModified: gitDate('src/app/page.tsx'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
