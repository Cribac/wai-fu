'use client'

import { useEffect } from 'react'
import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'

interface IEmblaSliderProps {
  children: React.ReactNode
  sliderOptions?: EmblaOptionsType
  overflowWrapperClassName?: string
  scrollContainerClassName?: string
}

const EmblaSlider = ({
  children,
  sliderOptions,
  overflowWrapperClassName,
  scrollContainerClassName,
}: IEmblaSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(sliderOptions)

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.reInit()
  }, [emblaApi])

  return (
    <div ref={emblaRef} className={clsx('embla', overflowWrapperClassName)}>
      <div className={clsx('embla__container', scrollContainerClassName)}>{children}</div>
    </div>
  )
}

interface IEmblaSlideProps {
  children: React.ReactNode
  className?: string
}

const EmblaSlide = ({ children, className }: IEmblaSlideProps) => (
  <div className={clsx('embla__slide', className)}>{children}</div>
)

export { EmblaSlider, EmblaSlide }
