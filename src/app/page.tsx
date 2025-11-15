import HelloWorld from '@/app/components/atoms/ui/HelloWorld.ui.component'
import ImageSlider from '@/app/components/molecules/image-slider.component'
import { fetchImages } from '@/app/actions/images/imagesActions'

export default async function Home() {
  const result = await fetchImages({ limit: 10, gif: false })

  console.log('result', result)

  return (
    <main className="font-sans">
      <h1>Home</h1>
      <p>Whereas disregard and contempt for human rights have resulted</p>
      <p>
        <HelloWorld />
      </p>
      <div className="tbd">{'images' in result && <ImageSlider images={result.images} />}</div>
    </main>
  )
}
