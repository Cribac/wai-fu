'use server'

import { IImageResponse, IImagesError } from '@/app/types'

interface IImageQueryParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  included_tags?: string[]
  excluded_tags?: string[]
  included_files?: string[]
  excluded_files?: string[]
  is_nsfw?: 'true' | 'false' | 'null'
  gif?: boolean
  order_by?: string
  orientation?: string
  limit?: number
  full?: boolean
  width?: string // e.g. ">= 100", "< 500", etc.
  height?: string // e.g. ">= 100", "< 500", etc.
  byte_size?: string // e.g. ">= 1000", "< 5000", etc.
}

export async function fetchImages(params: IImageQueryParams): Promise<IImageResponse | IImagesError> {
  const apiUrl = `${process.env.API_URL}/search`
  const queryParams = new URLSearchParams()

  for (const key in params) {
    if (Array.isArray(params[key])) {
      params[key]?.forEach((value) => {
        queryParams.append(key, value)
      })
    } else {
      queryParams.set(key, params[key])
    }
  }
  const requestUrl = `${apiUrl}?${queryParams.toString()}`

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
    })
    const result = await response.json()
    return result
  } catch (error) {
    if (error instanceof Error) {
      return { detail: error.message } as IImagesError
    } else {
      throw error
    }
  }
}
