import React, { useState } from 'react'

const Registration = () => {
    const {user,setUser}=useState("");
    const {pwd,setPwd}=useState("");
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' >
        <h2 className='bg-warning text-dark text-center mt-3 w-100'>Registration</h2>
        <form className='d-flex flex-column w-50'>
            <input 
            type="text"
            name={"user"}
            value={user}
            onChange={(e)=>setUser(e.target.value)}
            placeholder='Enter user name'
            className='mt-3'
            />
            <input 
            type="password"
            name={"pwd"}
            value={pwd}
            onChange={(e)=>setPwd(e.target.value)}
            placeholder='Enter password'
            className='mt-3'
            />
            <button type='submit' className='btn btn-primary mt-3'>Register</button>
        </form>
    </div>
  )
}

export default Registration