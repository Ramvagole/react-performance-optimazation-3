import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { List } from './component/List'
import Display from './component/Display'


function App() {
  const [count, setCount] = useState(0)
  let [b,setGro]=useState([])
  let [a,setVal]=useState({title:"",post:"",boolean:false})
  
  function timer(){
      setCount(count=>count+1)
  }
  function addPost(){
    setCount(count=>count+1)
    setGro([...b,{...a,id:count}])
    setVal({title:"",post:"",boolean:false})
  }
  
  useEffect(()=>{
    setInterval(() => {
      timer()
    }, 1000);
  },[])
  
  return (
    <>
      <List setVal={setVal} addPost={addPost} a={a} count={count}/>
      <hr/>
      {
        b.map((v,i)=>{
          return(<Display key={i} v={v}/>)
        })
      }
    </>
  )
}

export default App
