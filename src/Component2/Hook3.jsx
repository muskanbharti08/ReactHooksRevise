import React, { useEffect, useState } from 'react'

export default function Hook3() {
let [count,setCount]  = useState(0);
let click = ()=>{
        setCount(count+1);
}


// useEffect is a hook of react which caught the reder or rerender 
useEffect(()=>{
       console.log(`the value of count is ${count}`)
});   

  return (
    <>
    <h1 className="">count = {count} </h1>
    <button onClick={click} className="">+1</button>
    </>
  )
}
