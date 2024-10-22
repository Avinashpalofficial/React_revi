import {Outlet,Link}  from "react-router-dom";

const Lauout = ()=>{
    return (
             
        <>
         <nav>
               <table>
                <th><Link to = "/" >Home</Link></th>
                <th><Link to = "/Conatact">Contact</Link></th>
                <th><Link to ="/About">About</Link></th>
                <th><Link to = "/Nopage">Nopage</Link></th>
               </table>
         </nav>
               <Outlet/>
        </>
    )
}
export default Lauout