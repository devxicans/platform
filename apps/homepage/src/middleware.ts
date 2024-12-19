import { NextResponse, NextRequest } from "next/server";
import { getLocale, supportedLanguages } from "./lib";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale: boolean = supportedLanguages.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}