
export function addData(a,setGro){
    fetch("http://localhost:3000/posts",{
        method:"POST",
        body:JSON.stringify(a)
    }).then(()=>{
        displayData(setGro)
    })
}

export function displayData(setGro){
    fetch("http://localhost:3000/posts").
    then((res)=>res.json()).
    then((res)=>{setGro(res)})
}