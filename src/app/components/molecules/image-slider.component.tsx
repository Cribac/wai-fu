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
    <div className="flex items-center justify-center">
      <EmblaSlider emblaRef={emblaRef}>
        {images.map((image) => (
          <EmblaSlide key={image.image_id}>
            <img src={image.url} alt="" />
          </EmblaSlide>
        ))}
      </EmblaSlider>
    </div>
  )
}
