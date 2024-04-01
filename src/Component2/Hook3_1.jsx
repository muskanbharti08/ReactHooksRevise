import React, { useEffect, useState } from 'react'

export default function Hook3_1() {
         let [count1,setCount1] = useState(0);
         let [count2,setCount2] = useState(1000);
         let clk1=() =>{
                setCount1(count1+1);
         }

         let clk2 = () =>{
                setCount2(count2-1);
         }


        
        //  useEffect(()=>{
        //         console.log("hellow World")
        //  },[count1])


        // agr dependency me kuch nhi pass krte hai [] isme to mtlb ek bar useeffet work krega jb page render hoga first time dubara rerendering pe nhi hoga  
        // useEffect(()=>{
        //         console.log("hellow World")
        //  },[])

  return (
   <>
   <h1 className="">{count1}</h1>
   <button onClick={clk1} className="">click me for increase</button>

   <h1 className="">{count2}</h1>
   <button onClick={clk2} className="">click me for decrease</button>
   
   </>
  )
}
