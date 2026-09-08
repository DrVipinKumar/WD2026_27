import React, { useEffect, useState } from 'react'

const Home = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        setCount(count+1)
    },[])
     useEffect(()=>{
        alert("Count="+count)
    },[count])
  return (
    <div className='container' style={{height:"80vh"}}>
        <h2>Count={count}</h2>
        <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Inc</button>
        </div>
  )
}

export default Home