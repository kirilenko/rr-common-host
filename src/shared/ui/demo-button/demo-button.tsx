import { FC, useState } from 'react'

import StyledDemoButton from './demo-button.style'

type Props = {
  title: string
}
const DemoButton: FC<Props> = ({ title }) => {
  const [count, setCount] = useState(0)

  return (
    <StyledDemoButton onClick={() => setCount((p) => p + 1)}>
      {title}-{count}
    </StyledDemoButton>
  )
}

export default DemoButton
