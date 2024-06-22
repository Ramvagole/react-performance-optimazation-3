
export function List({setVal,addPost,a,count}){

    return(
        <>
        <h5>Timer:{count}</h5>
        <input value={a.title} name="title" placeholder="Enter the title" onChange={(e)=>setVal({...a,[e.target.name]:e.target.value})} /><br/><br/>
        <textarea placeholder="Enter the post" name="post" value={a.post} onChange={(e)=>setVal({...a,[e.target.name]:e.target.value})}/><br/><br/>
        <button onClick={addPost} style={{backgroundColor:"orange"}}>Add Post</button>
        </>
    )
}