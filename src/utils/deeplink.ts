export function stripLocaleFromPath(pathname: string, lang: string): string {
  const prefix = `/${lang}`;
  if (pathname === prefix) return '/';
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  return pathname;
}
