import type { Lang } from '../types';
import { langs } from '../i18n/ui';

export const langPaths = () => langs.map((lang) => ({ params: { lang } }));

export function isLang(value: string | undefined): value is Lang {
  return !!value && langs.includes(value as Lang);
}

export function switchLanguage(pathname: string, lang: Lang) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && langs.includes(parts[0] as Lang)) parts[0] = lang;
  else parts.unshift(lang);
  return '/' + parts.join('/') + '/';
}
