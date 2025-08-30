import { describe, test, expect } from 'vitest'
import { imagesActions } from '@/app/actions'
import { imagesResponse } from './mocks/images'

describe('fetchImages', () => {
  test('fetchImages returns images', async () => {
    const images = await imagesActions.fetchImages({})
    expect(images).toEqual(imagesResponse)
  })
})
