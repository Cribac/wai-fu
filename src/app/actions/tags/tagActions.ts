'use server'

import { ITags, ITagsFull, ITagsError } from '@/app/types'

type TFetchAllTagsParams = {
  full: boolean
  nsfw?: boolean
}

export async function fetchAllTags({
  full,
  nsfw = true,
}: TFetchAllTagsParams): Promise<ITags | ITagsFull | ITagsError> {
  try {
    const params = new URLSearchParams()
    params.append('full', full.toString())

    const response = await fetch(`${process.env.API_URL}/tags?${params}`, {
      method: 'GET',
    })

    let tags = await response.json()

    // don't include nsfw in our response if it's set to false
    if (!nsfw) {
      tags = {
        versatile: tags.versatile,
      }
    }

    return tags
  } catch (error) {
    if (error instanceof Error) {
      return { detail: error.message } as ITagsError
    } else {
      throw error
    }
  }
}
