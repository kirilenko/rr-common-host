import { FC } from 'react'

import { withRenderLog } from '@app/providers'
import { cnc, DivProps } from '@shared/lib'

import StyledDemoHeader from './demo-header.style'

type Props = DivProps<{
  title: string
}>

const DemoHeader: FC<Props> = ({ title, ...divProps }) => (
  <StyledDemoHeader {...divProps} className={cnc('DemoHeader')}>
    <a href="#">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </a>
    <h1>{title}</h1>
    <p>from remote host: rr-shared-host</p>
  </StyledDemoHeader>
)

export default withRenderLog(DemoHeader)
