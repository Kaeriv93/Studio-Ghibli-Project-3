import React, { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'


const FilmPage= (props)=>{
const {id}=useParams()

const [page, setPage]=useState("")
const filmPage= async() =>{
    const res=await fetch(URL)
    const data=await res.json()
    setPage(data)
    console.log(data)
}
useEffect(()=>{
filmPage()
},[])
console.log(props.name)
return(
    <div>
        <h1>{props.film}`</h1>
    </div>
)}

export default FilmPage;
