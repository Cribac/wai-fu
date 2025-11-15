import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

test('Page', async () => {
  render(<Page />)
  await screen.findByRole('heading')

  console.log('screen', screen.debug())

  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})
