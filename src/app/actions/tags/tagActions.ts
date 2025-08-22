'use server'

import { ITags, ITagsFull, ITagsError } from '@/app/types'

export async function fetchAllTags(): Promise<ITags | ITagsFull | ITagsError> {
  const params = new URLSearchParams()
  params.append('full', 'true')
  const response = await fetch(`${process.env.API_URL}/tags?${params}`, {
    method: 'GET',
  })
  const tags = await response.json()

  return tags
}
