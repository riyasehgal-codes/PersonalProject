import { useState } from 'react'
import { D } from '../data'
import { load, save } from '../storage'
import { boom } from '../confetti'
// Letters open as popups
export default function OpenWhenLetters() {
  const [opened, setOpened] = useState(() => load('openWhen'))
  const [cur, setCur] = useState(null)
  const open = i => {
    setCur(i)
    const next = { ...opened, [i]: 1 }
    setOpened(next); save('openWhen', next)
    if (D.openWhen[i][2]) boom(50)
  }
  const l = cur !== null ? D.openWhen[cur] : null
  return (
    <section id="letters" className="bg5">
      <h2>OPEN THESE LETTERS WHEN...</h2>
      <p className="sub">little pieces of me for different versions of you.</p>
      <div className="ow">
        {D.openWhen.map((x, i) => (
          <div key={i} className={'ev reveal' + (x[2] ? ' glow' : '') + (opened[i] ? ' opened' : '')} onClick={() => open(i)}>
            <h3 style={{ fontSize: '1.1rem' }}>💌 {x[0]}</h3>
          </div>
        ))}
      </div>
      <div className={'modal' + (l ? ' on' : '')} onClick={e => e.target === e.currentTarget && setCur(null)}>
        {l && <div className="mbox"><button className="x" onClick={() => setCur(null)}>✕</button><h3>💌 {l[0]}</h3><p>{l[1]}</p></div>}
      </div>
    </section>
  )
}
