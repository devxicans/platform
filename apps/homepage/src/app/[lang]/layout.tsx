import { LanguagesType } from '../../types'

interface AppLayoutProps {
  children: React.ReactNode
  params?: {
    lang: LanguagesType
  }
}

export default function AppLayout({ children, params }: AppLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}