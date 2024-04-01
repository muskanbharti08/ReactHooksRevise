import React, { useEffect, useState } from 'react'

export default function Hook2({name}) {

  let [greet , setGreet]  = useState(true);
  let click = () =>{
      setGreet(!greet)
  }
      

  return (
    <>
    <div className="">
        <h1 className="">{greet ? "good morning":"good night"}  {name}</h1>
        <button onClick={click} className="">wish</button>

    </div>
    
    </>
  )
}
