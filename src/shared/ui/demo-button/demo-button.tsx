import { FC, useState } from 'react'

import { cnc } from '@shared/lib/class-name-creator'
import { ButtonProps } from '@shared/lib/html-props'

import StyledDemoButton from './demo-button.style'

type Props = ButtonProps<{
  title: string
}>
const DemoButton: FC<Props> = ({ title }) => {
  const [count, setCount] = useState(0)

  return (
    <StyledDemoButton
      className={cnc('DemoButton')}
      onClick={() => setCount((p) => p + 1)}
    >
      {title}-{count}
    </StyledDemoButton>
  )
}

export default DemoButton
