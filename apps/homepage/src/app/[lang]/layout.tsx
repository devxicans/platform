import { SupportedLanguages } from '../../types'
import { LocProvider } from '../../lib/context/loc-context'
import { getDictionary } from '../../lib'
import { Header } from './_shared'

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
      <Header loc={loc} />
      {children}
    </LocProvider>
  )
}