//@ts-nocheck
import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [message, setMessage] = useState("")

    function changeMessage(value) {
        setMessage(value)
    }

    
  return (
    <div className='flex flex-col'>
        <h1>Parent</h1>
        <p>Message:{message}</p>
        <Child  changeMessage={changeMessage}/>
    </div>
  )
}
