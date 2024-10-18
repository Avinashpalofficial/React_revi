import { useState } from "react";

export default function  Component (){
              const [color,setcolor] =  useState("red");
              const [car, setcar] = useState("Nano");
    return (
      <div>

        <h1>i like {color} color..</h1>
        <button type="button" onClick={() =>setcolor("blue")}>blue</button>
        <h1> My favorite  car is {car}</h1>

        <button type="button" onClick={() =>setcar("Farari2")}>Farari2</button>


      </div>
    )

}    

