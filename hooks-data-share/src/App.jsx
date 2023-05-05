import { useState } from 'react'

import './App.css'
import { Typography } from '@mui/material'

// Importing Button1 and Button 2 
import Button1 from './components/Button1'
import Button2 from './components/Button2'


function App() {
  // UseState Hook for State 
  const [count, setCount] = useState(0);

  // handleClick => to update the count state
  const handleClick = () => {
    setCount(count + 1);
  }
  
  return (
    <>
      <div className='main-container'>
        <Typography variant="h4" component="h4">
          Transfer state of 1 Button to the other one
        </Typography>
        <div className='btn-grp'>
          {/* Passing props to the components */}
          <Button1 count={count} onClick={handleClick} />
          <Button2 count={count} onClick={handleClick} />
        </div>
      </div>
    </>
  )
}

export default App
