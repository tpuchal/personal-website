'use client'
import ThemeToggle from './ThemeToggle'
import WeatherComponent from './WeatherComponent'
import { useState } from 'react';


const Header = () => {
  const [mobileClicked, setMobileClicked] = useState(false);

  const handleClick = () => {
    setMobileClicked(!mobileClicked);
    console.log(mobileClicked);
  };

  return (
    <header className='flex min-w-full justify-between items-center py-6 px-4'>
      <div className='flex justify-start px-4 w-2/5'>
        <WeatherComponent />
      </div>
      <div className='flex justify-between'>
        <div className="hidden justify-end lg:flex">
          <a href='#home' className='mx-2 px-4 flex items-center bg-background border border-green-500 transition-all duration-150 hover:bg-green-500 hover:text-black hover:border-green-300 hover:animate-pulse focus:outline-none focus:ring-1 focus:ring-green-400'>Home</a>
          <a href='#about-me' className='px-4 mx-2 flex items-center bg-background border border-green-500 transition-all duration-150 hover:bg-green-500 hover:text-black hover:border-green-300 hover:animate-pulse focus:outline-none focus:ring-1 focus:ring-green-400'>About me</a>
          <a href='#my-experience' className='mx-2 px-4 flex items-center bg-background border border-green-500 transition-all duration-150 hover:bg-green-500 hover:text-black hover:border-green-300 hover:animate-pulse focus:outline-none focus:ring-1 focus:ring-green-400'>My Experience</a>
          <a href='#contact' className='ml-2 mr-4 px-4 flex items-center bg-background border border-green-500 transition-all duration-150 hover:bg-green-500 hover:text-black hover:border-green-300 hover:animate-pulse focus:outline-none focus:ring-1 focus:ring-green-400'>Contact</a>
        </div>
        <div className='flex-col items-center justify-center mr-2 lg:hidden'>
          <button onClick={handleClick} className='h-[30px] w-[30px]'>
            {mobileClicked ? 
              <>
                <div className='my-2 p-0 bg-fontcolor w-full h-0.5 transition-all duration-0 rotate-45 translate-y-3'></div>
                <div className='my-2 p-0 bg-fontcolor w-full h-0.5 transition-all duration-0 opacity-0'></div>
                <div className='my-2 p-0 bg-fontcolor w-full h-0.5 transition-all duration-0 -rotate-45 -translate-y-2'></div>
              </> : 
              <>
                <div className='my-2 p-0 bg-fontcolor w-full h-0.5 transition-all duration-0'></div>
                <div className='my-2 p-0 bg-fontcolor w-full h-0.5 transition-all duration-0'></div>
                <div className='my-2 p-0 bg-fontcolor w-full h-0.5 transition-all duration-0'></div>
              </>

            }
          </button>
          {mobileClicked ? 
          <>
            <div className='absolute top-20 right-4 p-2 border-2 border-green-600 bg-background z-10'>
              <a href='#home' className='mx-2 px-4 flex items-center bg-background'>Home</a>
              <a href='#about-me' className='px-4 mx-2 flex items-center bg-background'>About me</a>
              <a href='#my-experience' className='mx-2 px-4 flex items-center bg-background'>My Experience</a>
              <a href='#contact' className='ml-2 mr-4 px-4 flex items-center bg-background'>Contact</a>
            </div>
          </> : 
          <>
            
          </>}
        </div>
        <ThemeToggle />
      </div>

    </header>
  )
}

export default Header