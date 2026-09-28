const F = ['🌼', '🌻', '🌼', '🌼', '🌻', '🌼', '🌼']
export default function Flowers({ inline }) {
  return <div className="flowers" style={inline ? { position: 'static', marginTop: 24 } : undefined}>{F.map((f, i) => <span key={i}>{f}</span>)}</div>
}
