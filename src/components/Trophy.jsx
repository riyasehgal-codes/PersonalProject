import { D } from '../data'
import Flowers from './Flowers'
export default function Trophy() {
  return (
    <section id="trophy" className="bg7">
      <div className="spot" />
      <div className="trophy">🏆</div>
      <h2 style={{ color: 'var(--gold)' }}>BOYFRIEND OF THE YEAR</h2>
      <p className="script sub">Awarded to:</p>
      <h3 style={{ fontSize: '2rem', color: 'var(--daf)' }}>MVP OF MY HEART</h3>
      <p className="script sub" style={{ marginTop: 14 }}>for excellence in<br />making me laugh,<br />baiting me,<br />loving me,<br />and being the reason i believe in love</p>
      <Flowers inline />
    </section>
  )
}
