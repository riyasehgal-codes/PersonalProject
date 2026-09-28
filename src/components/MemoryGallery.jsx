import { useState } from 'react'
import { D } from '../data'
const ROT = [-3, 2, -2, 3, -1]
function Polaroid({ m, i, onClick, big }) {
  return (
    <div className={big ? 'pol' : 'pol reveal'} style={{ '--r': ROT[i % 5] + 'deg' }} onClick={onClick}>
      <div className="ph">{m.img ? <img loading="lazy" src={m.img} alt="" /> : m.e}</div>
      <b>0{i + 1} — {m.t}</b><span>{m.c}</span>
    </div>
  )
}
export default function MemoryGallery() {
  const [z, setZ] = useState(null)
  return (
    <section id="us" className="bg3">
      <h2>A LITTLE BIT OF US</h2>
      <p className="sub">tiny moments that somehow became my favorite memories.</p>
      <div className="grid">{D.memories.map((m, i) => <Polaroid key={i} m={m} i={i} onClick={() => setZ(i)} />)}</div>
      <div className={'zoom' + (z !== null ? ' on' : '')} onClick={() => setZ(null)}>
        {z !== null && <Polaroid m={D.memories[z]} i={z} big />}
      </div>
    </section>
  )
}
