export default function Button({ children, filled, style }) {
  return <button style={style} className={`btn btn-${filled?"filled":"outlined"}`}>{children}</button>
}