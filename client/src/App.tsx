import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [title, setTitle] = useState('')

function handleCreateDeck(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
   fetch('http://localhost:5000/decks', {
    method: 'POST',
    body: JSON.stringify({ 
      title,
     }),
    headers: {
      "Content-Type": "application/json"
    }
   })
}

  return (
    <div className="App">
      <form
      onSubmit={handleCreateDeck}>
        <label htmlFor='deck title'>Deck Title</label>
        <input
        id='deck title'
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
         
          setTitle(e.target.value)
        }
      }
        />
        <button>Create deck</button>
      </form>
    </div>
  )
}

export default App
