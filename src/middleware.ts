// src/middleware.js
import { defineMiddleware, sequence } from "astro:middleware";
import { middleware } from "astro:i18n";

const { getPreferredLocale } = await import("./utils/locale.ts");
const { SITE_BASE, PAGES } = await import("./config.ts");
 
const nakedRoutes = PAGES.map((page) => `${page}`);

const normalizePath = (pathname: String) =>
  pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

export const userMiddleware = defineMiddleware(async (ctx, next) => {
  const response = await next();
  const { pathname, origin } = ctx.url;
  for (const route of nakedRoutes) {
    if (normalizePath(pathname) === `${SITE_BASE}${route}`) {
      const header = ctx.request.headers.get("accept-language");
      const preferred = getPreferredLocale(header);
      return Response.redirect(`${origin}${SITE_BASE}/${preferred}${route}`, 302);
    }
  }

  return response;
});

export const onRequest = sequence(
  userMiddleware,
  middleware({
    redirectToDefaultLocale: false,
    prefixDefaultLocale: true,
    fallbackType: "redirect"
  })
)