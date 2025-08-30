import { IArtist, TTagFull } from '@/app/types'

export interface IImage {
  artist: IArtist
  byte_size: number
  dominant_color: string
  extension: string
  favorites: number
  height: number
  image_id: number
  is_nsfw: boolean
  liked_at: string | null
  preview_url: string
  signature: string
  source: string
  tags: TTagFull[]
  uploaded_at: string
  url: string
  width: number
}

export interface IImageResponse {
  images: IImage[]
}

export interface IImagesError {
  detail: string
}
