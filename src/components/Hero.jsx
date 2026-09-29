import Flowers from './Flowers'

export default function Hero() {
  return (
    <section id="home" className="hero">

      {/* Background atmosphere */}
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="sun">
        <span />
      </div>

      <div
        className="cloud cloud--one"
        style={{ top: '14%' }}
      />

      <div
        className="cloud cloud--two"
        style={{ top: '32%' }}
      />

      {/* Floating little memories / sparkles */}
      <div className="floating-particles" aria-hidden="true">
        <span>✦</span>
        <span>♡</span>
        <span>✦</span>
        <span>·</span>
        <span>♡</span>
        <span>✦</span>
        <span>·</span>
        <span>♡</span>
      </div>

      {/* Menu */}
      <button className="hero__menu" aria-label="Open menu">
        <span />
        <span />
        <span />
      </button>

      {/* Main content */}
      <div className="hero__content">

        <div className="hero__eyebrow">
          <span className="eyebrow-line" />
          <span>VISSS, ILY</span>
          <span className="eyebrow-line" />
        </div>

        <p className="hero__tiny">
          a little something for
        </p>

        <h1 className="hero__title">
          <span className="hero__title-top">HAPPY</span>
          <span className="hero__title-main">
            BOYFRIEND
          </span>
          <span className="hero__title-bottom">
            DAY
            <span className="title-heart">♡</span>
          </span>
        </h1>

        <div className="hero__divider">
          <span />
          <i>✦</i>
          <span />
        </div>

        <p className="hero__message">
          to my favorite human,
          <br />
          my favorite teammate,
          <br />
          my favorite person to Rage Bait.
        </p>

        <p className="hero__secret">
          <span>psst...</span> there's more ↓
        </p>

        <a href="#letter" className="hero__button">
          <span>come closer</span>
          <span className="hero__button-arrow">↓</span>
        </a>

      </div>

      {/* Bottom decoration */}
      <div className="hero__ground">
        <div className="hero__grass" />
        <Flowers />
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>SCROLL</span>
        <div className="scroll-line">
          <i />
        </div>
      </div>

    </section>
  )
}