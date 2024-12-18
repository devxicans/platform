import { SupportedLanguages } from '../../types'

interface AppLayoutProps {
  children: React.ReactNode
  params: {
    lang: SupportedLanguages
  }
}

export default function AppLayout({ children, params }: AppLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}