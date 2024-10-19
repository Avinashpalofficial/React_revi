import { useState , useEffect } from "react";

 const  Custom  =() =>{
    const [ data , setdata] = useState(null);

    useEffect (()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setdata(data));
    }, []);

    return (
          <>    
         {
            data 
                &&  data.map((todo) =>{
                return <P key = {todo.id}> {todo.title}</P>;
            })
         }        
         
         </> 
      )
}

export default Custom;