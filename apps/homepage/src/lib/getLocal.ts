import { NextRequest } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { SupportedLanguages } from '../types'
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export const supportedLanguages: SupportedLanguages[] = ['en', 'es']
export const defaultLocale: string = 'en'

export function getLocale(request: NextRequest) {
  const acceptedLanguage = request.headers.get('accept-language') ?? defaultLocale;
  const headers = { 'accept-language': acceptedLanguage };
  let languages = new Negotiator({ headers }).languages();

  return match(languages, supportedLanguages, defaultLocale) as SupportedLanguages
}

export function getLocaleFromHeaders(headers: ReadonlyHeaders) {
  const acceptedLanguage = headers.get('accept-language') ?? defaultLocale;
  const langHeaders = { 'accept-language': acceptedLanguage };
  const languages = new Negotiator({ headers: langHeaders }).languages();

  return match(languages, supportedLanguages, defaultLocale) as SupportedLanguages
}