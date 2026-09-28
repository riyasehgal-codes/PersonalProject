import { useState } from 'react'
const LINKS = [['home', 'Home'], ['letter', 'Letter'], ['us', 'Us'], ['wrapped', 'Wrapped'], ['love', 'Love List'], ['songs', 'Songs'], ['coupons', 'Coupons'], ['letters', 'Letters'], ['trophy', 'Trophy'], ['final', 'Final']]
export default function Nav() {
  const [on, setOn] = useState(false)
  return (
    <nav className={on ? 'on' : ''}>
      <button aria-label="menu" onClick={() => setOn(!on)}>☰</button>
      <div className="links" onClick={() => setOn(false)}>{LINKS.map(([h, t]) => <a key={h} href={'#' + h}>{t}</a>)}</div>
    </nav>
  )
}
