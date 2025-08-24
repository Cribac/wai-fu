'use server'

import { ITags, ITagsFull, ITagsError } from '@/app/types'

export async function fetchAllTags({ full }: { full: boolean }): Promise<ITags | ITagsFull | ITagsError> {
  const params = new URLSearchParams()
  params.append('full', full.toString())

  const response = await fetch(`${process.env.API_URL}/tags?${params}`, {
    method: 'GET',
  })
  const tags = await response.json()

  return tags
}
