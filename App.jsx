import { useState } from 'react'
import './App.css'

function App() {
  
const [color, setColor] = useState("orange")

  return (
    <>
    <div className= "w-full h-screen duration-200" style={{backgroundColor:color}}>
    
    <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
  

    <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}} onClick={ ()=> setColor("Orange")}>Orange</button>
    </div>

    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Olive"}} onClick={ ()=> setColor("Olive")}>Olive</button>
</div>

<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Pink"}} onClick={ ()=> setColor("Pink")}>Pink</button>
</div>

<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Yellow"}} onClick={ ()=> setColor("Yellow")}>Yellow</button>
</div>

<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Brown"}} onClick={ ()=> setColor("Brown")}>Brown</button>
</div>

<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Olive"}} onClick={ ()=> setColor("Olive")}>Olive</button>
</div>

<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Black"}} onClick={ ()=> setColor("Black")}>Black</button>
</div>

<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"White"}} onClick={ ()=> setColor("White")}>White</button>
</div>


<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Purple"}} onClick={ ()=> setColor("Purple")}>Purple</button>
</div>

<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Gold"}} onClick={ ()=> setColor("Gold")}>Gold</button>
</div>
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Magenta"}} onClick={ ()=> setColor("Magenta")}>Magenta</button>
</div>

    
    </div>
    </div>
     
    </>
  )
}

export default App
