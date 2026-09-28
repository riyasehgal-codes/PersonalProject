import { useEffect } from 'react'
// Fades in every .reveal element as it scrolls into view
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target) } }), { threshold: .15 })
    document.querySelectorAll('.reveal').forEach(e => io.observe(e))
    return () => io.disconnect()
  }, [])
}
