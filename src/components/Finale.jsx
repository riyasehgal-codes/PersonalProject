import { useState } from 'react'
import { D } from '../data'
import { boom } from '../confetti'
import Flowers from './Flowers'
export default function Finale() {
  const [fired, setFired] = useState(false)
  const fire = () => {
    if (fired) return
    setFired(true); boom(150)
    setTimeout(() => boom(120), 500); setTimeout(() => boom(120), 1000)
  }
  return (
    <section id="final" className="bg8 fin">
      <div className="cloud" style={{ top: '10%', width: 400, height: 120 }} />
      <h3 style={{ fontSize: '2rem' }}>AND FINALLY...</h3>
      <p className="reveal">I'll choose you in every lifetime.</p>
      <p className="reveal">In every universe.<br />You're the answer of all my 11:11s<br />I miss you every single day<br />You mean SO SO much to me.</p>
      <p className="reveal">I love you.</p>
      <h2 className="reveal">HAPPY BOYFRIEND'S DAY ❤️</h2>
      <p className="reveal">— {D.author}</p>
      <button className="btn glow-btn" style={{ marginTop: 24 }} onClick={fire} disabled={fired}>{fired ? '💛 CONFETTI DEPLOYED' : '✨ ONE LAST THING ✨'}</button>
      {fired && <div style={{ marginTop: 20 }}><h2>YOU'RE STUCK WITH ME. ❤️</h2><p>Happy Boyfriend's Day, YAAYY.</p></div>}
      <Flowers />
    </section>
  )
}
