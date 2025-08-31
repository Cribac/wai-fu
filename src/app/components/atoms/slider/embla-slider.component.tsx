import clsx from 'clsx'
import { EmblaViewportRefType } from 'embla-carousel-react'

interface IEmblaSliderProps {
  emblaRef: EmblaViewportRefType
  children: React.ReactNode
  emblaSectionClassName?: string
  overflowWrapperClassName?: string
  scrollContainerClassName?: string
}

const EmblaSlider = ({
  children,
  emblaRef,
  emblaSectionClassName,
  overflowWrapperClassName,
  scrollContainerClassName,
}: IEmblaSliderProps) => {
  return (
    <section className={clsx('margin-auto max-w-[48rem]', emblaSectionClassName)}>
      <div ref={emblaRef} className={clsx('overflow-hidden', overflowWrapperClassName)}>
        <div className={clsx('flex ml-[calc(-1 * var(--slide-spacing))]', scrollContainerClassName)}>{children}</div>
      </div>
    </section>
  )
}

interface IEmblaSlideProps {
  children: React.ReactNode
  className?: string
}

const EmblaSlide = ({ children, className }: IEmblaSlideProps) => (
  <div
    className={clsx(
      'flex-shrink-0 flex-basis-[var(--slide-size)] min-w-0 pl-[calc(var(--slide-spacing))]]',
      className,
    )}>
    {children}
  </div>
)

export { EmblaSlider, EmblaSlide }
