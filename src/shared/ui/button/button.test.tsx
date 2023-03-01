import { fireEvent, getByText, render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import Button from '.'

describe('<Button />', () => {
  test('Button mounts properly', () => {
    const wrapper = render(<Button title="test" />)
    expect(wrapper).toBeTruthy()
  })
})

it('Click the button', () => {
  const wrapper = render(<Button title="test" />)
  const button = wrapper.container.querySelector('button') as HTMLButtonElement

  expect(button.textContent).toBe('test-0')

  fireEvent(
    getByText(button, 'test-0'), // initial count
    new MouseEvent('click', {
      bubbles: true,
    }),
  )

  expect(button.textContent).toBe('test-1')
})
