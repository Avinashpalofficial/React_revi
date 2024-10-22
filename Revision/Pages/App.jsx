import {BrowserRouter, Routes ,Route}  from "react-router-dom"
import Lauout from "./Lauout"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import Nopage from "./Nopage"

export default function App () {
      return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element ={<Lauout/>}>
              <Route index element ={<Home/>}/>
              <Route path ="contact" element= {<Contact/>}/>
              <Route path = "about" element = {<About/>}/>
              <Route path = "*" element ={<Nopage/>}/>

            </Route>
        </Routes>
        </BrowserRouter>
      )
}