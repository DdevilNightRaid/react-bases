// Importin UseStatet for updating the state 
import { useState } from 'react'
import Button from '@mui/material/Button';
import './App.css'
import './Styles.css'

function App() {
  // count => current state 
  // setCount => update the state
  const [count, setCount] = useState(0); // initial state => 0

  // function to update the state value 
  const handleClick = () => {
    // Current state + 1
    setCount(count + 1)
  }
  return (
    <div className="holder">
      <Button
        variant="outlined"
        onClick={handleClick}
        className="custom-button"
      >
        You Clicked Me: {count} time/s
      </Button>
    </div>
  )
}

export default App
