import styled from '@emotion/styled'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  margin: 8px;
  padding: 16px;

  cursor: pointer;

  color: white;
  border: none;
  border-radius: 4px;
  background: brown;

  font-family: sans-serif;

  &:hover {
    background: #560101;
  }
`

export default StyledButton
