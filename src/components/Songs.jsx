import { D } from '../data'

export default function Songs() {
  return (
    <section id="songs" className="bg6">
      <h2>SONGS THAT REMIND ME OF YOU 🎧</h2>

      <p className="sub">songs that somehow became ours.</p>

      <div className="songs">
        {D.songs.map((s, i) => (
          <div key={i} className="song reveal">
            <div className="art">
              <img src={s.img} alt={s.t} />
            </div>

            <div className="t">
              <b>"{s.t}"</b>
              <br />
              {s.a}
              <i>{s.r}</i>
            </div>
          </div>
        ))}
      </div>

      <a
        href={D.playlistUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn">OPEN OUR PLAYLIST →</button>
      </a>
    </section>
  )
}