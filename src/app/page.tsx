import HelloWorld from '@/app/components/atoms/ui/HelloWorld.ui.component'
import { fetchAllTags } from '@/app/actions'

export default async function Home() {
  const allTags = await fetchAllTags()

  console.log('allTags:', allTags)

  return (
    <div className="font-sans">
      <h1>Home</h1>
      <p>Whereas disregard and contempt for human rights have resulted</p>
      <p>
        <HelloWorld />
      </p>
    </div>
  )
}
