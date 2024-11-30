"use client"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { getSession } from "next-auth/react"
import axios from "axios"
import Navbar from "../../components/item/Navbar.jsx"
import Image from "../../components/item/Image.jsx"
import Title from "../../components/item/Title.jsx"
import Description from "../../components/item/Description.jsx"
import RelatedContent from "../../components/item/RelatedContent.jsx"
import CommentSection from "../../components/item/CommentSection.jsx"
import Card from "../../components/item/Card.jsx"

export default function Item() {
  let { id } = useParams()
  let [data, setData] = useState([])
  let [dataContent, setDataContent] = useState([])
  let [user, setUser] = useState("")
  let [randomNum, setRandomNum] = useState(0)
  useEffect(() => {
    getSession()
    .then(res => setUser(res))
    
    axios.get("/api/item")
    .then(res => {
      setData(res.data.data[id-1])
      setDataContent(res.data.data)
      setRandomNum(Math.floor(Math.random()*(res.data.data.length-5)))
    })
  },[])
  
  setTimeout(() => console.log(dataContent),2000)
  return( 
    <div>
      <Navbar login={user}/>
      <Image image={data?.gambar}/>
      <Title title={data?.nama} price={data?.harga}/>
      <Description desc={data?.deskripsi}/>
      <CommentSection/>
      <RelatedContent card={dataContent.slice((randomNum == id) ? 0:randomNum,randomNum+4).map((data,i) => <Card  key={i} link={`/item/${data.id}`} image={data.gambar} title={data.nama} price={data.harga}/>)}/>
    </div>
    )
}