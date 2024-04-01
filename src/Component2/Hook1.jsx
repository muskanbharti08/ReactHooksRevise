import React, { useState } from 'react'
// let init = 0;
export default function Hook1() {

let[count,setCount] = useState(0);
let clk = () =>{
        setCount(pre1=>pre1+2);
        setCount(pre2=>pre2+2);
        // init+=2;
        // console.log(init);
}


  return (
<>
<h1 className="">{count}</h1>
<button  onClick={clk} className="">click me</button>
</>
  )
}
