import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let x  = "Привет";

  const [X, setX] = useState(10);
  const [Y, setY] = useState(15);

  useEffect(() => {
    console.log(X)
  }, [X])

  useEffect(() => {
    console.log(Y)
  }, [Y])


  return (
    <>
      <div>
        <button onClick={()=> {setX(X-1)}}>X</button>
        <button onClick={()=> {setY(Y-1)}}>Y</button>
      </div>
    </>
  )
}

export default App
