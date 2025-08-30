import type { IImageResponse, IImagesError } from '@/app/types'

const imagesResponse: IImageResponse = {
  images: [
    {
      artist: {
        artist_id: 1,
        deviant_art: 'https://www.deviantart.com/4thwallzart',
        name: 'fourthwallzart',
        patreon: '',
        pixiv: '',
        twitter: 'https://twitter.com/4thWallzArt',
      },
      byte_size: 3299586,
      dominant_color: '#bbb7b2',
      extension: '.png',
      favorites: 1,
      height: 2304,
      image_id: 8108,
      is_nsfw: false,
      liked_at: '',
      preview_url: 'https://www.waifu.im/preview/8108/',
      signature: '58e6f0372364abda',
      source: 'https://www.patreon.com/posts/persephone-78224476',
      tags: [
        {
          description: 'A female anime/manga character.',
          is_nsfw: false,
          name: 'waifu',
          tag_id: 12,
        },
      ],
      uploaded_at: '2023-05-03T18:40:04.381354+02:00',
      url: 'https://cdn.waifu.im/8108.png',
      width: 1536,
    },
  ],
}

const imagesError: IImagesError = {
  detail: 'Internal Server Error',
}

export { imagesResponse, imagesError }
