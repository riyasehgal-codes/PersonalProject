// Call boom(n) from anywhere. Needs <Confetti /> mounted (canvas #cf).
const EMOJI = ['❤️', '🌼', '⭐', '🌻', '🧡', '🎮', '🔸']
let parts = [], running = false
export function boom(n = 60) {
  const cv = document.getElementById('cf'); if (!cv) return
  cv.width = innerWidth; cv.height = innerHeight
  const cx = cv.getContext('2d')
  for (let i = 0; i < n; i++) parts.push({ x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * .6, vx: (Math.random() - .5) * 14, vy: -Math.random() * 16 - 4, e: EMOJI[Math.random() * EMOJI.length | 0], s: 14 + Math.random() * 16 })
  if (running) return
  running = true
  const tick = () => {
    cx.clearRect(0, 0, cv.width, cv.height)
    parts.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .35; cx.font = p.s + 'px serif'; cx.fillText(p.e, p.x, p.y) })
    parts = parts.filter(p => p.y < innerHeight + 40)
    if (parts.length) requestAnimationFrame(tick); else { running = false; cx.clearRect(0, 0, cv.width, cv.height) }
  }
  tick()
}
