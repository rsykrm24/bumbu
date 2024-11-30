export default function Title(props) {
  return(
    <div className="p-3">
      <h1 className="text-2xl">{props.title}</h1>
      <h1 className="text-2xl font-bold">Rp  {props.price}</h1>
    </div>
    )
}