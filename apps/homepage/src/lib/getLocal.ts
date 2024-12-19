import { NextRequest } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { SupportedLanguages } from '../types'

export const supportedLanguages: SupportedLanguages[] = ['en', 'es']
export const defaultLocale: string = 'en'

export function getLocale(request: NextRequest) {
  const acceptedLanguage = request.headers.get('accept-language') ?? undefined
  const headers = { 'accept-language': acceptedLanguage }
  let languages = new Negotiator({ headers }).languages()

  return match(languages, supportedLanguages, defaultLocale) as SupportedLanguages
}