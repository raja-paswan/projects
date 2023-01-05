import { useState } from "react"

function Price(){
 const [count ,setCount] = useState(0)

    return(
        <>
        <h1>Price {count} </h1>
            <h3 onClick={()=>setCount(count+1)}>increse price </h3>
            <h3 onClick={()=>setCount(count-1)}>decrese price </h3>
        </>
    )   
 }
export default Price