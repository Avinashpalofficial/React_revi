import { useState } from 'react';


function Compo1 () {
    const [Bank ,setBank] = useState({
           bank : "SBI",
           branch: "chandpur",
           year: "1991"       
    });

    const updatebank= () =>{
         setBank (previousstate => {
            return {...previousstate , year: "2000"}
         });

    }       
    return (
        <div>
          <h1>This is my first account in {Bank.bank}  bank</h1>
          <p>
            account opening in {Bank.year}
          </p>
           <button type='button' onClick={updatebank}>year</button>         
        </div>
    ) 
}

export default Compo1