import Link from "next/link"

export default function Card(props) {
  return(
    <Link href={props.link} className="border-2 border-orange-700 rounded p-2">
      <img src={props.image} alt={props.title} className="aspect-square object-contain"/>
      <h1 className="truncate text-lg">{props.title}</h1>
      <h1 className="text-lg font-bold">Rp {props.price}</h1>
    </Link>
    )
}