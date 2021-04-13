export default function Card({data}) {
  return (
    <div className="card">  
      <div className="card-body">
        <img src={data.icon} alt={data.name}/>
        <h3>{data.name}</h3>
        <span>{data.desc}</span>
      </div>
    </div>
  )
}