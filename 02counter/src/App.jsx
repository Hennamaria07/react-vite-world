import { useEffect, useState } from 'react'
import './App.css'

function App() {
let [counter, setCounter] = useState(0);
const increment = () => {
  setCounter(++counter);
}
const decrement = () => {
  setCounter(--counter);
}
  return (
    <>
     <h1>{`Count: ${counter}`}</h1>
     <button onClick={increment} >+</button>
     <button onClick={decrement}>-</button>
    </>
  )
}

export default App
