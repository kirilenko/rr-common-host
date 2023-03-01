import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test, vi } from 'vitest'

import Header from '.'

describe('<Header />', () => {
  test('Header mounts properly', () => {
    const wrapper = render(<Header title="test" />)
    expect(wrapper).toBeTruthy()

    const h1 = wrapper.container.querySelector('h1')
    expect(h1?.textContent).toBe('test')

    const text = screen.getByText(/from remote host: rr-shared-host/i)
    expect(text.textContent).toBeTruthy()

    expect(
      // Get by text using the jest-dom matcher:
      screen.getByText(/from remote host: rr-shared-host/i),
    ).toBeInTheDocument()
  })
})

it('Click the Vite logo', async () => {
  // Example with the user event library
  render(<Header title="test" />)
  const user = userEvent.setup()

  const spyAnchorTag = vi.spyOn(user, 'click')
  await user.click(screen.getByAltText('Vite logo'))

  expect(spyAnchorTag).toHaveBeenCalledOnce()
})
