import { FC, useState } from 'react'

import StyledButton from './button.style'

type Props = {
  title: string
}
const Button: FC<Props> = ({ title }) => {
  const [count, setCount] = useState(0)

  return (
    <StyledButton onClick={() => setCount((p) => p + 1)}>
      {title}-{count}
    </StyledButton>
  )
}

export default Button
