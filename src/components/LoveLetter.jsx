import { useState } from 'react'
import { D } from '../data'
// Flips open AND back closed
export default function LoveLetter() {
  const [open, setOpen] = useState(false)
  return (
    <section id="letter" className="bg2">
      <div className={'env' + (open ? ' open' : '')}>
        <div className="flip">
          <div className="card" onClick={() => setOpen(true)}>
            <div style={{ fontSize: '3rem' }}>💌</div>
            <h3>A LITTLE SOMETHING FOR YOU</h3>
            <p className="script sub" style={{ margin: '8px 0 0' }}>click to open</p>
          </div>
          <div className="paper">
            <h3>{D.letterTitle}</h3>
            {D.letter.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
            <button className="back" onClick={() => setOpen(false)}>↺ turn it back over</button>
          </div>
        </div>
      </div>
      <p className="script sub reveal" style={{ marginTop: 30 }}>okay, now keep scrolling ↓</p>
    </section>
  )
}
