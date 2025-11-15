'use client'

import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaSlider, EmblaSlide } from '@/app/components/atoms/slider/embla-slider.component'
import type { EmblaOptionsType } from 'embla-carousel'
import type { IImage } from '@/app/types'

interface IImageSliderProps {
  images: IImage[]
}

export default function ImageSlider({ images }: IImageSliderProps) {
  const sliderOptions: EmblaOptionsType = {
    loop: true,
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(sliderOptions)

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.reInit()
  }, [emblaApi])

  return (
    <div className="flex items-center justify-center w-full">
      <EmblaSlider emblaRef={emblaRef} emblaSectionClassName="w-full overflow-hidden">
        {images.map((image) => (
          <EmblaSlide key={image.image_id}>
            {/* ensure each slide takes full viewport width so only one is visible */}
            <div className="flex items-center justify-center w-full min-w-full flex-none h-40 sm:h-56 md:h-72">
              <img
                src={image.url}
                alt={String(image.image_id) ?? ''}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </EmblaSlide>
        ))}
      </EmblaSlider>
    </div>
  )
}
