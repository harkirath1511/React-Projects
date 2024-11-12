import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black");
  

  return (
    <>
    <div className="w-full h-screen duration-200  text-white text-center" style={{backgroundColor : color}}> 
      <div className="fixed top-80 text-center w-full text-5xl text-gray-400">BG-CHANGER</div>
      <div className=" bg-gray-500 px-5 py-4 outline-none rounded-full flex flex-wrap justify-evenly gap-3" 
      style={{textAlign:'center', width:'1300px' , position:'fixed', bottom:'20px' , left: '100px'}}> 
        <button className=" bg-red-600 px-8 py-2.5 outline-none rounded-full " style={{color:"white"}}
        onClick = {function(){setColor('red')}}
        >Red</button>
        <button className=" bg-blue-600 px-8 py-2.5 outline-none rounded-full " style={{color:"white"}}
        onClick = {function(){setColor('Blue')}}
        >Blue</button>
        <button className=" bg-green-600 px-8 py-2.5 outline-none rounded-full " style={{color:"white"}}
        onClick = {function(){setColor('Green')}}
        >Green</button>
        <button className=" bg-pink-600 px-8 py-2.5 outline-none rounded-full " style={{color:"white"}}
        onClick = {function(){setColor('Pink')}}
        >Pink</button>
        <button className=" bg-white px-8 py-2.5 outline-none rounded-full " style={{color:"black"}}
        onClick = {function(){setColor('white')}}
        >White</button>
        <button className=" bg-teal-600 px-8 py-2.5 outline-none rounded-full " style={{color:"white"}}
        onClick = {function(){setColor('Teal')}}
        >Teal</button>
        <button className=" bg-black px-8 py-2.5 outline-none rounded-full " style={{color:"white"}}
        onClick = {function(){setColor('black')}}
        >Black</button>
        <button className=" bg-yellow-400 px-8 py-2.5 outline-none rounded-full " style={{color:"white"}}
        onClick = {function(){setColor('yellow')}}
        >Yellow</button>
        <button className=" bg-orange-500 px-8 py-2.5 outline-none rounded-full " style={{color:"white"}}
        onClick = {function(){setColor('orange')}}
        >Orange</button>
      </div>
    </div> 
    </> 
  )
}

export default App
