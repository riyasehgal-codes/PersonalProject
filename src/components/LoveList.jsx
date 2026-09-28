import { useEffect, useRef, useState } from 'react'
import { D } from '../data'
import Flowers from './Flowers'
export default function LoveList() {
  const ref = useRef(null)
  const [shown, setShown] = useState(0)
  useEffect(() => {
    let t
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      let n = 0
      t = setInterval(() => { n++; setShown(n); if (n >= D.loveList.length) clearInterval(t) }, 180)
    }, { threshold: .1 })
    io.observe(ref.current)
    return () => { io.disconnect(); clearInterval(t) }
  }, [])
  return (
    <section id="love" className="bg5">
      <h2>WHAT I LOVE ABOUT YOU 🌼</h2>
      <p className="sub">okay this list might get a little long.</p>
      <ul className="list" ref={ref}>{D.loveList.map((l, i) => <li key={i} className={i < shown ? 'in' : ''}>{l}</li>)}</ul>
      <p className="sub">ERROR : NEVER ENDING</p>
      <Flowers inline />
    </section>
  )
}
