import React, { useState } from 'react';

export default function AdminDashboard() {
  const [click, setClick] = useState(false);

  return (
    <div className='font-serif font-bold min-h-screen flex flex-col'>
      {/* Navbar */}
      <nav className='p-2 border border-black flex justify-between items-center bg-white'>
        <h1>MediScripts</h1>
        <div>
          {/* Ensure this image is in public/img/Default.png */}
          <img
            src='/img/Default.png'
            alt='Default profile'
            className='rounded-full w-12 h-12 object-cover'
          />
        </div>
      </nav>

      {/* Main Content */}
      <div className='flex flex-1'>
        {/* Sidebar */}
        <div className='bg-slate-500 w-1/6 p-4 text-white'>
          <ul className='space-y-4'>
            <li className='cursor-pointer hover:underline'>HOME</li>
            <li className='cursor-pointer hover:underline'>STOCK</li>
            <li>
              <div className='flex items-center cursor-pointer' onClick={() => setClick(!click)}>
                <span className='hover:underline'>PO</span>
                <span className='ml-2 text-yellow-300'>{click ? '▼' : '▶'}</span>
              </div>
              {click && (
                <ul className='ml-6 mt-2 space-y-2 text-sm text-white'>
                  <li className='hover:underline cursor-pointer'>PO CREATE</li>
                  <li className='hover:underline cursor-pointer'>PO STATUS</li>
                  <li className='hover:underline cursor-pointer'>PO LIST</li>
                </ul>
              )}
            </li>
            <li className='cursor-pointer hover:underline'>REGISTER</li>
          </ul>
        </div>

        {/* Main Panel */}
        <div className='flex-1 p-4'>
          {/* You can render routes or content here */}
          <h2 className='text-xl'>Welcome to Admin Dashboard</h2>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-slate-200 w-full h-8 text-center flex items-center justify-center'>
        <p className='text-sm'>© 2025 MediScripts</p>
      </footer>
    </div>
  );
}
