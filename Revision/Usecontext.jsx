import { useState } from 'react'
import React from 'react'

   function Usecontext  () {
     const [user ,setuser] = useState("Rahul");

  return (
    <div>
        <h1>{`Hello ${user}`}</h1>
        {/* <button type='button' onClick={() => setuser("pune")}>button</button> */}
       < Usecontext1 user ={user} setuser ={setuser}/>
       
    </div>
  )
}

function Usecontext1 ({ user ,setuser}){

    const [changeuser , changesetuser]  = useState(user);
          
    const localhandlechangeuser = () =>{
        changesetuser("Roman")
    }
    
     return (
        <div>
            {/* <h1> {`Usecontext1 is ${user}`}</h1>
            <h1>{`hi this is ${changeuser} `}</h1>
            <button type='button' onClick={localhandlechangeuser}>button</button> */}
            <Usecontext2 user = {user}/>
               
        </div>
    )
}

function Usecontext2 ({user}){

    return(
    <div>
        <h1>Usecontext2</h1>
        <Usecontext3 user = {user} />
    </div>
    )
}
 function Usecontext3 ({user}) {
    return(
        <div>
            <h1>{`hello ${user} again`}</h1>
        </div>
    )
    
 }

export default Usecontext