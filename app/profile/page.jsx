import Navbar from "../components/profile/Navbar.jsx"
import Profile from "../components/profile/Profile.jsx"
import Other from "../components/profile/Other.jsx"

export default function Page() {
  return (
    <div className="text-white">
      <Navbar/>
      <Profile />
      <Other />
    </div>
    )
}