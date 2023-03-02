import { FC } from 'react'

import { DivProps } from '@shared/lib/html-props'

import StyledDemoHeader from './demo-header.style'

type Props = DivProps<{
  title: string
}>
const DemoHeader: FC<Props> = ({ title }) => (
  <StyledDemoHeader>
    <a href="#">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </a>
    <h1>{title}</h1>
    <p>from remote host: rr-shared-host</p>
  </StyledDemoHeader>
)

export default DemoHeader
