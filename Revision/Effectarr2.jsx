import React, { useState , useEffect } from 'react'

function Effectarr2  ()  {
     const [count, setcount] = useState(0);
     useEffect (()=>{
        setTimeout (() =>{
            setcount ((count) => count+1)
        },3000)

        return clearTimeout(Effectarr2)
     },[]);
        





  return (
    <div><h1>i  have count {count} tiems </h1></div>
  )
}

export default Effectarr2