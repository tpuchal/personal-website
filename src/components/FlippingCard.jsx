'use client'
import { useState } from "react";
import { flippingCard } from '../styles/flippingcard.css';

const FlippingCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

  return (
   <div className='flippingCardContainer'>
        <div className={`flippingCard ${isFlipped ? 'cardFlipped' : ''}`}>
            <div className='front'>
                front 
            </div>
            <div className='back'>
                back
            </div>

        </div>
        <button onClick={handleFlip}>
            Click here to see a magic trick!
        </button>
    </div>
  )
}

export default FlippingCard