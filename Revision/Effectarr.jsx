import { useState, useEffect } from 'react'


 function Effectarr  () {
    const [count, setcount] = useState (0);
   
    useEffect (() =>{
        setTimeout ( () =>{
              setcount((count) => count+1)
        });

    },[2]);
     
  return (
    <div>
        <h1>i have router {count}</h1>
    </div>
  )
}

export default Effectarr