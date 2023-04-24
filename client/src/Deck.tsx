import { useEffect, useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import { deleteDeck } from './api/deleteDeck';
import { TDeck, getDecks } from './api/getDecks';
import { createDeck } from './api/createDeck';
import { createCard } from './api/createCard';
import { Routes, Route, useParams } from 'react-router-dom';
import { getDeck } from './api/getDeck';



export default function Deck() {
    const [deck, setDeck] = useState<TDeck | undefined>()
    const [cards, setCards] = useState<string[]>([])
    const [text, setText] = useState('')
    const { deckId } = useParams();
   
    async function handleCreateDeck(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()   
       const {cards: serverCards} = await createCard(deckId!, text)
      setCards(serverCards)
       setText('')
    }
    
    // async function handleDeleteDeck(deckId: string) {
    //   await deleteDeck(deckId)  
    //    setDecks(decks.filter((deck) => deck._id !== deckId))
    // }
    
    useEffect(() => {
      async function fetchDeck() {  
        if (!deckId) return;
       const newDeck = await getDeck(deckId)
       setDeck(newDeck)
       setCards(newDeck.cards)
      }
      fetchDeck();
    }, [deckId]);
    
      return (
        <div className="App">
          <ul className="decks">
            {
            cards.map((card) => (
              <li key={card}>
                {/* <button onClick={() => handleDeleteDeck(deck._id)}>X</button>
                */}
             {card}
                </li>
    
           ) )}
          </ul>
    
    
          <form
          onSubmit={handleCreateDeck}>
            <label htmlFor='card-text'>Card Text</label>
            <input
            id='card-text'
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
             
              setText(e.target.value)
            }
          }
            />
            <button>Create card</button>
          </form>
        </div>
      )
        
}