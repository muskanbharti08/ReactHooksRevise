

import React, { useRef, useState } from 'react'
import Home from './Component/Home'
import Footer from './Component/Footer'
import Header from './Component/Header'


let muskan= {
  user : {
    name:"muskan",
    age:21
  }
}



export default function App() {

  // let muskan = useRef(null);
  // let  clk = () =>{
  //   muskan.current.scrollIntoView({behaviour:"smooth"});
  // }





//   let fn1 =  () =>{
//     console.log(muskan.age);
//   }

// fn1();


//  ? =  optional changing operator

let [user,setUser] = useState(null);

let c1 = ()=>{
  let obj1 = {
    name:"Muskan"
  }
  setUser(obj1);
}



  return (
    <div>
      {/* <h1 ref = {muskan}>move here </h1> */}

      {/* <h1 className="">The name is {user?.name}</h1> */}
      <h1 className="">my name is {user?.name}</h1>
      <Header/>
      <Home/>
      <Footer/>
      
      {/* <button  onClick={clk} className="">Scroll</button> */}
      
      <button  onClick={c1} className="">click me</button>
      </div>
    
  )
}
