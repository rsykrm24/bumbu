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
import Button from "../../components/item/Button.jsx"

export default function Item() {
  let { id } = useParams()
  let [dataItem, setDataItem] = useState([])
  let [dataContent, setDataContent] = useState([])
  let [user, setUser] = useState("")
  let [randomNum, setRandomNum] = useState(0)
  let [loading, setLoading] = useState(true)
  let [text, setText] = useState("")
  
  useEffect(() => {
    getSession()
    .then(res => setUser(res))
    
    axios.get("/api/item")
    .then(res => {
      setDataItem(res.data.data[id-1])
      setLoading(false)
      let random = Math.floor(Math.random()*(res.data.data.length-5))
      let rawData = res.data.data
      let dataRandom = []
      for(let i = random;i<=random+4;i++) {
        dataRandom.push(rawData[i])
      }
      setDataContent(dataRandom)
    })
  },[])
  
  const submit= (e) => {
    e.preventDefault()
  }
  return((loading) ? 
    <div>
      <Navbar login={user}/>
      <div className="p-3">Loading...</div>
    </div> : 
    <div>
      <Navbar login={user}/>
      <div>
        <Image image={dataItem?.gambar}/>
        <Title title={dataItem?.nama} price={dataItem?.harga}/>
        <Button/>
      </div>
      <Description desc={dataItem?.deskripsi}/>
      {
        (user) ? <CommentSection submit={submit} text={text} changeText={e => setText(e.target.value)}/> : ""
      }
      <RelatedContent card={dataContent.slice((randomNum == id) ? 0:randomNum,Math.min(randomNum+4)).map((data,i) => <Card  key={i} link={`/item/${data.id}`} image={data.gambar} title={data.nama} price={data.harga}/>)}/>
    </div>
    )
}