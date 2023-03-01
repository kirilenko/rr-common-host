import { FC } from 'react'

import StyledHeader from './header.style'

type Props = {
  title: string
}
const Header: FC<Props> = ({ title }) => (
  <StyledHeader>
    <h1>{title}</h1>
    <p>from remote host: rr-shared-host</p>
  </StyledHeader>
)

export default Header
