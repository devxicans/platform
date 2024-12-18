import { NextRequest } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { SupportedLanguages } from '../types'

export const supportedLanguages: SupportedLanguages[] = ['en', 'es']
export const defaultLocale: string = 'en'

export function getLocale(request: NextRequest) {
  let headers = { 'accept-language': 'en-US,en;q=0.5' }
  let languages = new Negotiator({ headers }).languages()

  return match(languages, supportedLanguages, defaultLocale) as SupportedLanguages
}