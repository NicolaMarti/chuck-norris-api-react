import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const [joke , setJoke ]= useState(null)

  return (
    <div className="App">
     <title>CIAOO</title>
     <h1>Benvenuti nel sito di Chuck Norris</h1>
     <p></p>
     <div className="card">
      <button onClick={( )=> setCount((count)=>count+1)}>
        count is {count}
      </button>
      <Button text="Carica il Joke"></Button>
      <Button text="Copia"></Button>
     </div>


    </div>
  )
}

export default App
