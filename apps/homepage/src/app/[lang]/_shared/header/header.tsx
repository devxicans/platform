import './header.module.scss'

type HeaderProps = {
  loc: {
    [x in string]: string
  }
}

export function Header({ loc }: HeaderProps) {
  return <h1>{loc.header}</h1>
} 