import React from "react"
import { useParams } from "react-router"

function Product(){
    const {price} = useParams()
    return(
        <>
         <h1 onClick={()=>price - 1}>Product :- {price}</h1>
        </>
    )   
 }

 export default Product