import { describe, test, expect } from 'vitest'
import { imagesActions } from '@/app/actions'
import { imagesResponse } from './mocks/images'

describe('fetchImages', () => {
  test('fetchImages returns images', async () => {
    const result = await imagesActions.fetchImages({})
    if ('images' in result) {
      const { images } = result
      expect(images.length).toEqual(imagesResponse.images.length)
    } else {
      console.error(result.detail)
    }
  })
})
