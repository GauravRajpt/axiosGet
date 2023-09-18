import { useEffect,  } from 'react'
import { useState } from 'react';
import './App.css'
import axios from "axios";
function App() {
  const [data, setData] = useState("")
  const [error,setError]= useState("")

  useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/user").
    then((res)=>setData(res.data)).catch((err)=>{setError(err)})
  },[])

  return (
    <>{error!==""?<h1>{error.message}</h1>:null}
      {data && data?.map((i)=>{
        const {name, id}= i;
        return <li>{name} <h2>{id}</h2></li>
      })}
      
    </>
  )
}

export default App
