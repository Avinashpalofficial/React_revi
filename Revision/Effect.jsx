import { useState, useEffect } from 'react'
// import React from 'react'

 function Effect ()  {
    const [time , settime] = useState(0);
    useEffect(() =>{
        
        setTimeout(() =>{
            settime((time) =>time+1)
        },3000)

    })

  return (
    <div>
             <h1>i have rendered {time}</h1>

    </div>
  )
}

export default Effect