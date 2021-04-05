import React, {useState} from 'react'

function State() {
    const [name,setName]= useState("Godfather")
    return(
       <div className="mystate">
           <h1>Series : {name}</h1>
           <button onClick={()=>{
               setName("Peaky Blinders")
           }}>Switch</button>

       </div>
    )
}
export default State