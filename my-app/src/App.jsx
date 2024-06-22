import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { List } from './component/List'
import Display from './component/Display'

function App() {
  const [count, setCount] = useState(0)
  let [b,setGro]=useState([])
  let [a,setVal]=useState({title:"",post:""})
  let [c,setBool]=useState(false)
  function timer(){
      setCount(count=>count+1)
  }
  function addPost(){
    setGro([...b,a])
    setVal({title:"",post:""})
  }
  let verifyPost=useCallback((i)=>{
    setBool(i)
  },[c])
  useEffect(()=>{
    setInterval(() => {
      timer()
    }, 1000);
  },[])
  
  return (
    <>
      <List setVal={setVal} addPost={addPost} a={a} count={count}/>
      <hr/>
      <Display b={b} c={c} verifyPost={verifyPost}/>
    </>
  )
}

export default App
