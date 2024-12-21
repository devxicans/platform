import styles from './header.module.scss'
import { MenuButton } from '../menuButton'

type HeaderProps = {
  loc: {
    [x in string]: string
  }
}

export function Header({ loc }: HeaderProps) {
  return (
    <div className={styles.main} data-testid="header">
      <h1>@1<span className={styles.spanText}>x</span>Dev</h1>
      <div className={styles.buttonMenu}>
      <MenuButton text={loc.menuBtn1} href='/'/>
      <MenuButton text={loc.menuBtn2} href='/projects'/>
      <MenuButton text={loc.menuBtn3} href='/contact'/>
      </div>
    </div>
  )
}