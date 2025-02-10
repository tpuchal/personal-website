'use client'
import ThemeToggle from './ThemeToggle'
import WeatherComponent from './WeatherComponent'


const Header = () => {
  return (
    <header className='flex min-w-full justify-around py-6'>
        <div className='w-[50%] flex justify-start px-4'>
            <WeatherComponent/>
        </div>
        <div className='w-[50%] flex justify-end px-4'>
            <a href='#home' className='mx-2 px-4 flex items-center bg-background border border-green-500 transition-all duration-150 hover:bg-green-500 hover:text-black hover:border-green-300 hover:animate-pulse focus:outline-none focus:ring-1 focus:ring-green-400'>Home</a>
            <a href='#about-me' className='mx-2 px-4 flex items-center bg-background border border-green-500 transition-all duration-150 hover:bg-green-500 hover:text-black hover:border-green-300 hover:animate-pulse focus:outline-none focus:ring-1 focus:ring-green-400'>About me</a>
            <a href='#my-experience' className='mx-2 px-4 flex items-center bg-background border border-green-500 transition-all duration-150 hover:bg-green-500 hover:text-black hover:border-green-300 hover:animate-pulse focus:outline-none focus:ring-1 focus:ring-green-400'>My Experience</a>
            <a href='#contact' className='mx-2 px-4 flex items-center bg-background border border-green-500 transition-all duration-150 hover:bg-green-500 hover:text-black hover:border-green-300 hover:animate-pulse focus:outline-none focus:ring-1 focus:ring-green-400'>Contact</a>
            <ThemeToggle/>
        </div>
        </header>
  )
}

export default Header