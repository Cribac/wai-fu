import clsx from 'clsx'
import { EmblaViewportRefType } from 'embla-carousel-react'

interface IEmblaSliderProps {
  emblaRef: EmblaViewportRefType
  children: React.ReactNode
  overflowWrapperClassName?: string
  scrollContainerClassName?: string
}

const EmblaSlider = ({ children, emblaRef, overflowWrapperClassName, scrollContainerClassName }: IEmblaSliderProps) => {
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
