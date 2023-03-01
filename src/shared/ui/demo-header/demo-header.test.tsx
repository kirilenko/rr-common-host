import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test, vi } from 'vitest'

import DemoHeader from '.'

describe('<Header />', () => {
  test('DemoHeader: mounts properly', () => {
    const wrapper = render(<DemoHeader title="test" />)
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

it('DemoHeader: click the Vite logo', async () => {
  // Example with the user event library
  render(<DemoHeader title="test" />)
  const user = userEvent.setup()

  const spyAnchorTag = vi.spyOn(user, 'click')
  await user.click(screen.getByAltText('Vite logo'))

  expect(spyAnchorTag).toHaveBeenCalledOnce()
})
