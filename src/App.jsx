import { useReveal } from './hooks'
import Nav from './components/Nav'
import Petals from './components/Petals'
import Confetti from './components/Confetti'
import Hero from './components/Hero'
import LoveLetter from './components/LoveLetter'
import MemoryGallery from './components/MemoryGallery'
import BoyfriendWrapped from './components/BoyfriendWrapped'
import LoveList from './components/LoveList'
import Songs from './components/Songs'
import Coupons from './components/Coupons'
import OpenWhenLetters from './components/OpenWhenLetters'
import Trophy from './components/Trophy'
import Finale from './components/Finale'

export default function App() {
  useReveal()
  return (
    <>
      <Nav /><Petals /><Confetti />
      <Hero /><LoveLetter /><MemoryGallery /><BoyfriendWrapped /><LoveList />
      <Songs /><Coupons /><OpenWhenLetters /><Trophy /><Finale />
    </>
  )
}
