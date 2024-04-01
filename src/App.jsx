

import React, { createContext, useRef, useState } from 'react'
import Home from './Component/Home'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Hook1 from './Component2/Hook1'
import Hook3 from './Component2/Hook3'
import Hook3_1 from './Component2/Hook3_1'
import Hook2_02 from './Component2/Hook2_02'
import Hook2_01 from './Component2/Hook2_01'
import Hook2 from './Component2/Hook2'






// let muskan= {
//   user : {
//     name:"muskan",
//     age:21
//   }
// }


export let userContext =  createContext();

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

// let [user,setUser] = useState(null);

// let c1 = ()=>{
//   let obj1 = {
//     name:"Muskan"
//   }
//   setUser(obj1);
// }



  return (
  //   <div>
      // {/* <h1 ref = {muskan}>move here </h1> */}

      // {/* <h1 className="">The name is {user?.name}</h1> */}
      // <h1 className="">my name is {user?.name}</h1>
      // <Header/>
      // <Home/>
      // <Footer/>
      
      // {/* <button  onClick={clk} className="">Scroll</button> */}
      
      // <button  onClick={c1} className="">click me</button>
      // </div>
    <>
    
    



    {/* useEffect */}
    {/* <Hook1/> */}
    {/* <Hook3/>
    <Hook3_1/> */}


    <userContext.Provider value = "ucP">
      {/* <Hook2_02 user  = "Raman"/> */}
      <Hook2_01 user = "Muskan" />
      <Hook2 name = "Muskan"/>
    </userContext.Provider>



    </>
  )
}
