import { FC, useState } from 'react'

import { withRenderLog } from '@app/providers'
import { ButtonProps, cnc } from '@shared/lib'

import StyledDemoButton from './demo-button.style'

type Props = ButtonProps<{
  title: string
}>
const DemoButton: FC<Props> = ({ title, ...buttonProps }) => {
  const [count, setCount] = useState(0)

  return (
    <StyledDemoButton
      {...buttonProps}
      className={cnc('DemoButton')}
      onClick={() => setCount((p) => p + 1)}
    >
      {title}-{count}
    </StyledDemoButton>
  )
}

export default withRenderLog(DemoButton)
