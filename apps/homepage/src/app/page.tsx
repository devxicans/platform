import { Hero, Project } from './components'

import styles from './home.module.css';

export default function HomePage() {
  return (
      <div className={styles.main}>
        <Hero />
        <Project />
      </div>
  );
}
