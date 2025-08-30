import { loadEnvFile } from 'node:process'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'
import { normalTags, fullTags } from './mocks/tags'
import { imagesResponse } from './mocks/images'

loadEnvFile('.env')

export const restHandlers = [
  http.get(`${process.env.API_URL}/tags`, ({ request }) => {
    const url = new URL(request.url)

    if (url.searchParams.get('full') === 'true') {
      return HttpResponse.json(fullTags)
    }

    return HttpResponse.json(normalTags)
  }),

  http.get(`${process.env.API_URL}/images`, ({ request }) => {
    const url = new URL(request.url)

    if (url.searchParams.get('full') === 'true') {
      return HttpResponse.json(imagesResponse)
    }

    return HttpResponse.json(imagesResponse)
  }),
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test for test isolation
afterEach(() => server.resetHandlers())
