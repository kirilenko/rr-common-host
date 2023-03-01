import { fireEvent, getByText, render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import DemoButton from '.'

describe('<Button />', () => {
  test('DemoButton: mounts properly', () => {
    const wrapper = render(<DemoButton title="test" />)
    expect(wrapper).toBeTruthy()
  })
})

it('DemoButton: click the button', () => {
  const wrapper = render(<DemoButton title="test" />)
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
