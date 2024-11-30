"use client"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { getSession } from "next-auth/react"
import axios from "axios"
import Navbar from "../../components/search/Navbar.jsx"
import SearchInput from "../../components/search/SearchInput.jsx"
import Card from "../../components/search/Card.jsx"

export default function Page() {
  let { search } = useParams()
  let route = useRouter()
  let [searchInput, setSearchInput] = useState("")
  let [alertInput, setAlertInput] = useState(false)
  let [loading, setLoading] = useState(true)
  let [data, setData] = useState([])
  let [user, setUser] = useState("")
  
  useEffect(() => {
    getSession()
    .then(res => setUser(res))
    
    axios.get("/api/item")
    .then(res => {
      let data = res.data.data
      let realData = data.filter(data => data.nama.toLowerCase().search(decodeURI(search).toLowerCase()) > 0) || []
      setData(realData)
      setLoading(false)
    })
  },[])
  
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
      <div className="p-3 font-bold text-lg">
        <h1>Looking for {decodeURI(search)}...</h1>
      </div>
      <div className="grid grid-cols-2 gap-3 p-3">
        {(loading) ? <div>Loading...</div> : (data.length == 0) ? <div>Data tidak ada </div> : data.map((data, i) => <Card link={`/item/${data.id}`} title={data.nama} price={data.harga} image={data.gambar} key={i}/>)}
      </div>
    </div>
    )
}