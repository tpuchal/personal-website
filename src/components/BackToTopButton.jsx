'use client'

import { ArrowBigUp, ArrowUp01 } from "lucide-react";
import { useEffect, useRef, useState } from "react"

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);
    const topRef = useRef(null);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 100);
        }

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({behavior: 'smooth'})
    };
  return (
    <>
        <div ref={topRef}>
            {visible && (
                <button onClick={scrollToTop} className="fixed bottom-6 right-20 flex justify-between z-10 bg-fontcolor text-background px-4 py-2">
                    <span>Go back up</span>
                    <ArrowBigUp></ArrowBigUp>
                </button>
            )}
        </div>
    </>
  )
}

export default BackToTopButton