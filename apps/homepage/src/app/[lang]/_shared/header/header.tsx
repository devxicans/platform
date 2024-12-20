import './header.module.scss'

type HeaderProps = {
  loc: {
    [x in string]: string
  }
}

export function Header({ loc }: HeaderProps) {
  return <h1 data-testid="header">{loc.header}</h1>
} 