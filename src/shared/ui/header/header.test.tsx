import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

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
