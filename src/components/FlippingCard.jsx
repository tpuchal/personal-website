'use client'
import { useState } from "react";
import '../styles/flippingcard.css';
import Image from "next/image";

const FlippingCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }
    const frontLogos = [
        "css-3.svg",
        "html-1.svg",
        "logo-javascript.svg",
        "next.svg",
        "react-2.svg",
        "tailwind-css-2.svg"
    ];

    const backLogos = [
        "c-1.svg",
        "java-4.svg",
        "kafka.svg",
        "postgresql.svg",
        "spring-3.svg",
        "spring-boot-1.svg"
    ];

  return (
    <div className="flex-col justify-center items-center mt-6">
        <div className='flippingCardContainer'>
            <div className={`flippingCard ${isFlipped ? 'cardFlipped' : ''}`}>
                <div className='front'>
                    <span>My frontend experience: </span>
                    <ul className="list-disc">
                        <li>NextJS - 2 years commercial</li>
                        <li>React - 4 years non commercial</li>
                        <li>AngularJS - 1 year commercial</li>
                    </ul>
                    This website has been created with NextJS. Check out the source code! I tried to include some of the most popular React concepts into it.
                </div>
                <div className='back'>
                    <span>My backend experience:</span>
                    <ul className="list-disc">
                        <li>Java (8/11/17) - 4 years commercial, 7 years in use</li>
                        <li>C - 2 years commercial, 14 years in use</li>
                        <li>Python - 1 year non commercial, not a fan</li>
                    </ul>
                </div>
            </div>
            <div className="logosGridContainer">
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 top-0 left-0">
                    {frontLogos.map((src, index) => (
                        <div key={index} className={`flex items-center justify-center h-[100%] relative transition-opacity duration-1000 px-2 py-2 bg-gray-500 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
                            <Image
                                src={"/" + src}
                                alt={`Logo ${index + 1}`}
                                width={0}
                                height={0}
                                style={{width: 'auto', height: '50px'}}
                                ></Image>
                        </div>
                    ))}

                </div>
                <div className="logosGrid">
                {backLogos.map((src, index) => (
                        <div key={index} className={`flex items-center justify-center h-[100%] relative transition-opacity duration-1000 px-2 py-2 bg-gray-800 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
                        <Image
                            src={"/" + src}
                            alt={`Logo ${index + 1}`}
                            width={0}
                            height={40}
                            style={{width: 'auto', height: '50px'}}
                            ></Image>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="flipButtonContainer">
            <button onClick={handleFlip} className={`flipButton ${isFlipped ? 'flipButtonFront' : 'flipButtonBack'}`}>
                    {isFlipped ? 'Come back to frontend technologies' : 'Click to see whats behind the mirror'}
            </button>
        </div>
    </div>
  )
}

export default FlippingCard