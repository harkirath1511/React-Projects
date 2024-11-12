import { useState , useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  let [length, setLength] = useState(5)
  let [number, setNumber] = useState(false)
  let [char, setChar] = useState(false)
  let [password, setPassword] = useState("")

  const passGen = useCallback(function(){
    let pass =""
    let str = "ABCDEFGHIKKLMNOPQRTSUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number==true){
      str += "0123456789"
    }
    if(char==true){
      str += "!@#$%&_";
    }
    for(let i=1; i<=length; i++){
      let randNum = Math.floor(Math.random()*str.length)+1;
      pass += str.charAt(randNum);
    }

    setPassword(pass);

  },[length,number,char,setPassword])

  useEffect(()=>{
    passGen();
  }
  ,[length,number,char,passGen])

  const copyPass= () =>{
    window.navigator.clipboard.writeText(password);
  }

  let btnRef = useRef();

  const style = () =>{ 
    btnRef.current.style.backgroundColor = "black";
  }

  useEffect(() => {
    btnRef.current.style.backgroundColor = "blue"
  
  }, [password])
  
 
  return (
   <>
  <div className="h-screen w-full bg-black flex justify-center ">
    <div className="w-8/12 h-1/4 rounded-3xl px-5 pt-3 pb-20 bg-gray-700 text-center my-40">
    <h1 className="text-white text-4xl my-1.5">Password Generator</h1>
    <input type="text" className="shadow-xl rounded-l-3xl my-3 w-2/3 px-5 py-4 "
     placeholder='password'
      value={password}
      readOnly />
      <button type='button' ref={btnRef}  className="bg-blue-600 px-4 text-center pt-3 pb-4 transition-1  rounded-r-3xl text-xl text-white "
       onClick={()=>{
        style()
        copyPass()
       }}
      >copy</button>
      <br></br>
      <span className="mx-0 fixed left-80 w-auto">
        <input type="range" min={5} max={50} id="txtlength" className="pl-1 mt-6 w-60 " defaultValue="1"
        onChange={function(e){
          setLength(e.target.value);
        }}
        ></input>
        <label for="txtlength" className="ml-3 text-2xl mb-2 text-orange-500 *" >Length({length})</label>
        <input type="checkbox" id="numCheck" className='ml-10' defaultValue={number} 
         onChange={ ()=>{
            setNumber((prev)=> !prev);
          }}/>
        <label for="numCheck" className=" ml-1.5 text-2xl  mb-2 text-orange-500">Numbers</label>
        <input type="checkbox" id="charCheck" className='ml-10' defaultValue={char} 
         onChange={ ()=>{
          setChar((prev)=> !prev);
         }}/>
        <label for="charCheck" className="text-2xl ml-1.5  mb-2 text-orange-500">Characters</label>
      </span>
    </div>
  </div>
   </>
  )
}

export default App

