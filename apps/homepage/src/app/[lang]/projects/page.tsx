import { CustomProject } from './custom-project'
import styles from './projects.module.scss'

export default function ProjectsPage() {
  return (
    <div className={styles.main}>
    <CustomProject/>
    <h1>ProjectPage</h1>
    </div>
  )
}