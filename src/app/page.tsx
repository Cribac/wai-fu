import HelloWorld from '@/app/components/atoms/ui/HelloWorld.ui.component'
import { EmblaSlider, EmblaSlide } from '@/app/components/atoms/slider/embla-slider.component'

export default function Home() {
  return (
    <div className="font-sans">
      <h1>Home</h1>
      <p>Whereas disregard and contempt for human rights have resulted</p>
      <p>
        <HelloWorld />
      </p>
      <EmblaSlider>
        <EmblaSlide>Slide 1</EmblaSlide>
        <EmblaSlide>Slide 2</EmblaSlide>
        <EmblaSlide>Slide 3</EmblaSlide>
      </EmblaSlider>
    </div>
  )
}
