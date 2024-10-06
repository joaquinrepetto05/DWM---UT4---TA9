import { useState , useEffect } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  useEffect (() => {
    document.title = `Contador: ${count}`
  }, [count])

  return (
    <>
      <h2>UT4 - TA4</h2>
      <div>
          <Button  onClickHandler={() => setCount(count + 1)}>Incrementar</Button>
          <Button  onClickHandler={() => setCount(count - 1)}>Decrementar</Button>
        <p>Contador: {count}</p>
      </div>
    </>
  )
}

export default App