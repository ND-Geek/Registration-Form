import React, {useState} from 'react'
import App from './App'



function Demo() {
    const [Dname,setDname]= useState("Google")
    return (
        <div>
            
            <App setDname={setDname} name={Dname}    />
        </div>
    )
}

export default Demo
