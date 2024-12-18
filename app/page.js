"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getSession } from "next-auth/react"
import Navbar from "./components/home/Navbar.jsx"
import SearchInput from "./components/home/SearchInput.jsx"
import Card from "./components/home/Card.jsx"
import axios from "axios"

export default function Page() {
  let route = useRouter()
  let [data, setData] = useState([])
  let [searchInput, setSearchInput] = useState("")
  let [alertInput, setAlertInput] = useState(false)
  let [loading, setLoading] = useState(true)
  let [user, setUser] = useState("")
  
  useEffect(() => {
    getSession()
    .then(res => setUser(res))
    
    axios.get("/api/item")
    .then(res => {
      setData(res.data.data)
      setLoading(false)
    })
  },[]) 
  
  setTimeout(() => console.log(user),2000)
  
  function searchSubmit(e) {
    e.preventDefault();
    (searchInput == "") ? setAlertInput(true) : route.push(`/search/${encodeURI(searchInput)}`)
  }
  return(
    <div>
      <div className="sticky w-full top-0">
        <Navbar login={user}/>
        <SearchInput search={searchInput} searchChange={e => setSearchInput(e.target.value)} submit={searchSubmit} />
        {alertInput ? <div className="flex justify-center"><div className="bg-red-600 font-bold text-white p-3 mt-3 w-[95%]">Input harap diisi</div></div> : ""}
      </div>
      <div className="grid grid-cols-2 gap-3 p-3">
        {(!loading) ? data.map((data,i) => <Card key={i} link={`/item/${data.id}`} title={data.nama} price={data.harga} image={data.gambar}/>) : <h1>Loading...</h1>}
      </div>
    </div>
    )
}