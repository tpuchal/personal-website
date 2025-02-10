'use client'
import { useState } from "react";
import '../styles/flippingcard.css';

const FlippingCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }

  return (
    <div className="flex-col justify-center">
        <div className='flippingCardContainer'>
            <div className={`flippingCard ${isFlipped ? 'cardFlipped' : ''}`}>
                <div className='front'>
                    <span>My frontend experience: </span>
                    On the frontend I can create websites using NextJS, other React frameworks would be pretty easy to learn I suppose
                </div>
                <div className='back'>
                    <span>My backend experience:</span>
                    <ul className="list-disc">
                        <li>Java - 4 years commercial, 7 years in use
                        </li>
                        <li>C - 2 years commercial, 14 years in use</li>
                        <li>Python - 1 year non commercial, not a fan</li>
                    </ul>
                </div>
            </div>
            <div className="w-[50%]">
                some images go here
            </div>
        </div>
        <button onClick={handleFlip} className="flipButton">
                Click here to see what's behind the mirror
        </button>
    </div>
  )
}

export default FlippingCard