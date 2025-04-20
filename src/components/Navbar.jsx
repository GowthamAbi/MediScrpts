import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function Navbar() {
  const[toggleMenu,setToggleMenu]=useState(false)
  const navItems=[{label:'Sign in',href:'/signin'},{label:'Card',href:'/card'}]
  return (

    <header className="flex justify-between items-center px-6 py-4 text-black font-serif font-bold fixed top-0 w-full z-50 shadow-md bg-white p-4 ">

      <a href="#" className='text-xl'>MediScripts</a>

      {/* Large Devices */}
      <nav className='hidden md:flex space-x-6'>
        {navItems.map((item,index)=>(
          <a key={index}
          href={item.href} className="hover:text-black transition duration-300">{item.label}</a>
        ))}
      </nav>
      
        {/* Hamburger Menu */}
      <button onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden">
        <Bars3Icon className="h-6 w-6 text-black" />
      </button>

          {/* Mobile Menu */}
          {toggleMenu && (
        <nav className="absolute top-16 left-0 w-full bg-gray-800 text-center text-bla py-4 space-y-4 md:hidden">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setToggleMenu(false)}
              className="block hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}


    </header>
  )

}
