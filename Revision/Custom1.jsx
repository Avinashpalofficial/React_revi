 import { useState, useEffect } from "react";

 const Custom1 = (url) =>{
           const [data , setdata] = useState(null);

           useEffect(()=>{
            fetch(url)
                 .then((res)=> res.json())
                 .then((data)=>setdata(data))
           },[url])

           return [data];




 }
export default Custom1