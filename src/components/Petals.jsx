import { useMemo } from 'react'
export default function Petals() {
  const n = typeof innerWidth !== 'undefined' && innerWidth < 700 ? 8 : 16
  const items = useMemo(() => Array.from({ length: n }, () => ({ left: Math.random() * 100, dur: 10 + Math.random() * 12, delay: -Math.random() * 20 })), [n])
  return items.map((p, i) => <i key={i} className="petal" style={{ left: p.left + 'vw', animationDuration: p.dur + 's', animationDelay: p.delay + 's' }} />)
}
