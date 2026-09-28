
import { useState } from 'react'
import { D } from '../data'
import { boom } from '../confetti'

export default function Coupons() {
  const [done, setDone] = useState({})

  const redeem = (i) => {
    if (done[i]) return

    setDone(prev => ({ ...prev, [i]: true }))
    boom(40)
  }

  return (
    <section id="coupons" className="bg3">
      <h2>COUPONS YOU CAN REDEEM 💌</h2>

      <p className="sub">
        because apparently love comes with benefits.
      </p>

      <div className="cps">
        {D.coupons.map(([emoji, title, desc, small], i) => (
          <div
            key={i}
            className={`cp ${done[i] ? 'done' : ''}`}
            onClick={() => redeem(i)}
          >
            <div className="cp-content">
              <div className="cp-emoji">{emoji}</div>

              <h3>{title}</h3>

              <div className="cp-desc">{desc}</div>

              <small className="cp-small">{small}</small>
            </div>

            {done[i] && (
              <div className="redeemed-stamp">
                REDEEMED
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}