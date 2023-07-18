import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>users
        <>Name</>
        <>events</>
      </>
      <>Events</>
      <>Event Details
        <>Title</>
        <>Time</>
        <>Guests</>
        <>Description</>
      </>
    </>
  )
}

export default App
