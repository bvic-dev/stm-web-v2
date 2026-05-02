export function stripLocaleFromPath(pathname: string, lang: string): string {
  return pathname.replace(`/${lang}`, '');
}
