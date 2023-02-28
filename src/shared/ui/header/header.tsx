import { FC } from 'react'

import StyledHeader from './header.style'

type Props = {
  title: string
}
const Header: FC<Props> = ({ title }) => <StyledHeader>{title}</StyledHeader>

export default Header
