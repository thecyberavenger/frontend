import React from 'react'

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="shadow text-base md:text-sm border-t border-gray-600/40 px-4 md:px-12 lg:px-20 xl:px-48 2xl:px-64">
      <div className="w-full mx-auto max-w-screen-xl py-4 flex flex-col items-center sm:flex-row sm:justify-between text-xs mid-md:text-base space-y-2 sm:space-y-0">
        <span className="text-gray-500 sm:text-center dark:text-gray-400">&copy; {year} <a href="https://thecyberavenger.com" className="hover:underline" rel="noopener noreferrer">The Cyber Avenger</a> | All Rights Reserved.
        </span>
        <div className='text-gray-400'>Made in Bharat by <a href="https://ashokasec.com/" target="_blank" rel="noopener noreferrer" className='hover:underline'>@ashokasec</a>
        </div>
      </div>
    </footer>

  )
}

export default Footer