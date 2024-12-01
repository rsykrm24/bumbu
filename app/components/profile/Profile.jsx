export default function Profile(props) {
  return(
    <div className="flex gap-3 bg-orange-700 p-3">
      <div>{props.photo}</div>
      <h1>{props.nama}</h1>
    </div>
    )
}