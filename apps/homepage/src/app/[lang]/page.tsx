import styles from './home.module.css'
import { SupportedLanguages } from '../../types'
import { getDictionary } from '../../lib'

interface AppPageProps {
  params: {
    lang: SupportedLanguages
  }
}

export default async function AppPage({ params }: AppPageProps) {
  const dic = await getDictionary(params.lang);

  return (
    <div className={styles.main}>
      <h1 className={styles.hero}>{dic.title}</h1>
    </div>
  )
}