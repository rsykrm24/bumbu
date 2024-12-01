import Link from "next/link"

export default function Navbar(props) {
  return(
    <div className="bg-orange-700 text-white flex items-center justify-between p-3">
      <Link href="/" className="font-bold text-2xl">BumbuShop</Link>
      {(props.login == null) ? <Link href="/api/auth/signin">Sign In</Link> : (props.login == "") ? <div></div> : <div className="flex gap-2">
        <div>cart</div>
        <div>profile</div>
      </div>}
    </div>
    )
}