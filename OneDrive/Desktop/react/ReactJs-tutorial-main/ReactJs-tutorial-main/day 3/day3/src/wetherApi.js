import './App.css';
import {useState ,useEffect } from "react"
import {useParams } from "react-router-dom"
import axios from "axios"

function Weterdata(){
    let {city} = useParams()
    const [wetherData , setWetherData] = useState({})
    const [search ,setSearch] = useState("")

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=753b0e790de8e82132363b966ae19ac6`    

    const getData =  async ()=>{
        await axios.get(url).then((res)=>{
        setWetherData(res.data.main)}).catch((err)=>err.message)
    }

    useEffect(()=>{
        getData(url)
    },[]);

        return(  
        <>
        <br/>
        <input
        placeholder='search'
        onChange={(e)=>{ setSearch(e.target.value)}}
        />
        <button type='submit'>search</button>
        <h1>Wether in {city}</h1>
        <ol>tempratuer:- {wetherData.temp}</ol>
        <ol>Maximum tempratuer:- {wetherData.temp_min}</ol>
        <ol>Minimum tempratuer:- {wetherData.temp_max}</ol>
        <ol>humidity :- {wetherData.humidity}</ol>
        <ol>location :- {search}</ol>

        </>)
}
export default Weterdata


// import React from "react"
// class Clascomponent extends React.Component{
// constructor(){
//     super()
//     console.log("hello constructer")
//     this.state={
//         a:2
//     }
//     this.update()
// }
// update(){
//     setInterval(()=>{
//        this.setState({a:this.state.a+1})
//     },1000)
// }

//     render(){
//       return <div>
//         <h1>{this.props.greet} I am class component and a child of time component </h1>
//         <p>value - {this.state.a}</p>
//    </div> }
//   }
// export default Clascomponent
