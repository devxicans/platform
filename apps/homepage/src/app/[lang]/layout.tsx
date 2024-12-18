import { SupportedLanguages } from '../../types'
import { LocProvider } from '../../lib/context/loc-context'
import { getDictionary } from '../../lib'

interface AppLayoutProps {
  children: React.ReactNode
  params: {
    lang: SupportedLanguages
  }
}

export default async function AppLayout({ children, params }: AppLayoutProps) {
  const loc = await getDictionary(params.lang);

  return (
    <LocProvider loc={loc}>
      {children}
    </LocProvider>
  )
}