import { memo } from "react"

function Display({b,c,verifyPost}){

    return(
        <>
        {
          b.map((v,i)=>{
          return(
            <div key={i} style={{border:"1px solid black",backgroundColor:`#${Math.random().toString(16).substr(-6)}`}}>
              <h3>{v.title}</h3>
              <h3>{v.post}</h3>
              {(c)?<button onClick={()=>verifyPost(false)}>verified</button>:<button onClick={()=>verifyPost(true)}>verify</button>}
            </div>
          )
        })
      }
        </>
    )
}

export default memo(Display)