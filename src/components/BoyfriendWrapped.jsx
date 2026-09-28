import { D } from '../data'
export default function BoyfriendWrapped() {
  return (
    <section id="wrapped" className="bg4">
      <h2 style={{ color: 'var(--cream)' }}>YOUR BOYFRIEND WRAPPED 💿</h2>
      <p className="sub" style={{ color: 'var(--cream)' }}>somehow you survived another year of me.</p>
      <div className="wr">
        {D.wrapped.map(([label, big, cap, bg], i) => (
          <div key={i} className="stat reveal" style={{ background: bg }}>
            <small>{label}</small><div className="big">{big}</div><em>{cap}</em>
          </div>
        ))}
      </div>
    </section>
  )
}
