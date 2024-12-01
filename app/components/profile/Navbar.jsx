import Link from "next/link"

export default function Navbar(props) {
  return(
    <div className="bg-orange-700 text-white flex items-center justify-between p-3">
      <Link href="/" className="font-bold text-2xl">BumbuShop</Link>
      <Link href="/api/auth/signout">Log Out</Link>
    </div>
    )
}