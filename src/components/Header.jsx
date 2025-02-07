import React from 'react'

const Header = () => {
  return (
    <header className='flex min-w-full justify-end px-5'>
        <a href='#' className='mx-2 px-4 bg-black border border-green-500 transition-all duration-150 hover:bg-green-500 hover:text-black hover:border-green-300 hover:animate-pulse focus:outline-none focus:ring-1 focus:ring-green-400'>Home</a>
        <a href='#' className='mx-2 px-4 bg-black border border-green-500 transition-all duration-150 hover:bg-green-500 hover:text-black hover:border-green-300 hover:animate-pulse focus:outline-none focus:ring-1 focus:ring-green-400'>About me</a>
        <a href='#' className='mx-2 px-4 bg-black border border-green-500 transition-all duration-150 hover:bg-green-500 hover:text-black hover:border-green-300 hover:animate-pulse focus:outline-none focus:ring-1 focus:ring-green-400'>My Experience</a>
    </header>
  )
}

export default Header