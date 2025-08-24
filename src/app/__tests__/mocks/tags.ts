import type { ITags, ITagsFull, ITagsError } from '@/app/types'

const normalTags: ITags = {
  versatile: ['tag1', 'tag2', 'tag3'],
  nsfw: ['nsfwtag1', 'nsfwtag2', 'nsfwtag3'],
}

const fullTags: ITagsFull = {
  versatile: [
    {
      tag_id: 1,
      name: 'tag1',
      description: 'description1',
      is_nsfw: false,
    },
    {
      tag_id: 2,
      name: 'tag2',
      description: 'description2',
      is_nsfw: false,
    },
    {
      tag_id: 3,
      name: 'tag3',
      description: 'description3',
      is_nsfw: false,
    },
  ],
  nsfw: [
    {
      tag_id: 4,
      name: 'nsfwtag1',
      description: 'nsfwdescription1',
      is_nsfw: true,
    },
    {
      tag_id: 5,
      name: 'nsfwtag2',
      description: 'nsfwdescription2',
      is_nsfw: true,
    },
    {
      tag_id: 6,
      name: 'nsfwtag3',
      description: 'nsfwdescription3',
      is_nsfw: true,
    },
  ],
}

const errorTags: ITagsError = {
  detail: 'error',
}

export { normalTags, fullTags, errorTags }
