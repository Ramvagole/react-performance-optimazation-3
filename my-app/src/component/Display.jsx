import { memo, useState } from "react"

function Display({v}){
    let [boolean,setbol]=useState(v.boolean)
    function verifyPost(){
        setbol(boolean=>!boolean)
    }
    console.log("hello")
    return(
        <>
        <div style={{border:"1px solid black",backgroundColor:`#${Math.random().toString(16).substr(-6)}`,marginTop:"20px"}}>
            <h3>{v.title}</h3>
            <h3>{v.post}</h3>
            {(boolean)?<button onClick={()=>verifyPost(v.id)}>verified</button>:<button onClick={()=>verifyPost(v.id)}>verify</button>}
        </div>
        </>
    )
}

export default memo(Display)