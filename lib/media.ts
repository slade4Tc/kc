import { IMAGE_BASE_URL } from '@/config/media';

export function resolveImageSrc(value?: string) {
  const v = (value ?? '').trim();
  if (!v) return '';

  // If it's already an absolute URL, keep it as-is
  if (/^https?:\/\//i.test(v)) return v;

  // Otherwise treat it as an R2 key/path (relative)
  const clean = v.replace(/^\/+/, '');
  return `${IMAGE_BASE_URL}/${clean}`;
}
