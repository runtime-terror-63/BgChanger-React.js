import { useState } from "react";

const App = () =>{
  const [color, setColor] = useState("olive")
  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
        <button onClick={()=> setColor("Green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Green"}}>Green</button>
        <button onClick={()=> setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Blue"}}>Blue</button>
        <button onClick={()=> setColor("Orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Orange"}}>Orange</button>
        <button onClick={()=> setColor("Magenta")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Magenta"}}>Magenta</button>
        <button onClick={()=> setColor("Yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Yellow"}}>Yellow</button>
        
        <button onClick={()=> setColor("Teal")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Teal"}}>Teal</button>
        <button onClick={()=> setColor("RebeccaPurple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "RebeccaPurple"}}>RebeccaPurple</button>
        <button onClick={()=> setColor("Lime")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Lime"}}>Lime</button>
        <button onClick={()=> setColor("Aqua")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Aqua"}}>Aqua</button>
        <button onClick={()=> setColor("LightslateGray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "LightslateGray"}}>LightslateGray</button>
        <button onClick={()=> setColor("Violet ")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Violet"}}>Violet</button>
        <button onClick={()=> setColor("Gold")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Gold"}}>Gold</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;