export type TTag = string
export type TTags = TTag[]

export type TTagFull = {
  tag_id: number
  name: string
  description: string
  is_nsfw: boolean
}
export type TTagsFull = TTagFull[]

export interface ITags {
  versatile: TTags
  nsfw?: TTags
}

export interface ITagsFull {
  versatile: TTagsFull
  nsfw?: TTagsFull
}

export interface ITagsError {
  detail: string
}
