import Flowers from './Flowers'
export default function Hero() {
  return (
    <section id="home" className="bg1">
      <div className="sun" />
      <div className="cloud" style={{ top: '12%', width: 300, height: 110 }} />
      <div className="cloud" style={{ top: '35%', width: 400, height: 130, animationDelay: '-25s' }} />
      <p className="script sub" style={{ margin: 0 }}>VISSS, ILY</p>
      <h1 style={{ fontSize: 'clamp(2.2rem,9vw,5.5rem)', color: 'var(--cream)', textShadow: '0 3px 0 var(--burnt)' }}>HAPPY<br />BOYFRIEND DAY</h1>
      <p className="script sub" style={{ marginTop: 18 }}>to my favorite human,<br />my favorite teammate,<br />my favorite person to Rage Bait.</p>
      <a href="#letter"><button className="btn">come closer ↓</button></a>
      <Flowers />
    </section>
  )
}
