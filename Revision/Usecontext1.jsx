import react ,{ useState,useContext, createContext} from 'react'
import React from 'react'

const usercontext = createContext();
function Usecontext1 () {
  const [user , setuser] = useState("Rahul");

 return (
     <usercontext.Provider value ={user} >
      <h1>{`Hello ${user}`}</h1>
      <Usercontext2/>
     </usercontext.Provider>
 )
}

function Usercontext2 (){
    
    const user =useContext(usercontext)
    return (
        <>
        <h1>{`hello ${user} again`}</h1>
        </>
    )

}

export default Usecontext1
