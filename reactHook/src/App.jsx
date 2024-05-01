import {useState} from "react"

function App() {
  let [counter,setCounter]=useState(100);
  const addition=()=>{
    counter+=1;
    console.log(counter);
    setCounter(counter);
  }
  return (
    <>
    <h1> Learning Hook</h1>
    <button onClick={addition}>Click me: {counter}</button>
    </>
  )
}

export default App
