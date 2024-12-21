import styles from './header.module.scss'
import { MenuButton } from '../menuButton'

export function Header() {
  return (
    <div className={styles.main}>
      <h1>@1<span className={styles.spanText}>x</span>Dev</h1>
      <div className={styles.buttonMenu}>
      <MenuButton text='Home' href='/'/>
      <MenuButton text='Projects' href='/projects'/>
      <MenuButton text='Contact' href='/contact'/>
      </div>
    </div>
  )
} 