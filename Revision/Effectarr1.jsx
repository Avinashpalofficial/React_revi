import {useState,useEffect} from 'react'

 function Effectarr1  ()  {
    const [count, setcount] = useState(0);
    const [calc, setcal] = useState(0);

    useEffect (() => {
         
          setcal (() => count*2)
    },[count])
  return (
    <div>
        <h1>i have count {count} times</h1>
        <button type='button' onClick={() => setcount((count) => count+1)}>+</button>
        <h1>i have count{calc} tiems</h1>
    </div>
  )
}

export default Effectarr1