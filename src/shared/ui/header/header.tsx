import { FC } from 'react'

import StyledHeader from './header.style'

type Props = {
  title: string
}
const Header: FC<Props> = ({ title }) => (
  <StyledHeader>
    <a href="#">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </a>
    <h1>{title}</h1>
    <p>from remote host: rr-shared-host</p>
  </StyledHeader>
)

export default Header
