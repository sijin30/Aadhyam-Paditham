import React, { useState } from 'react';

import { Link } from 'react-router-dom';


export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav_titles = [
    
    { path: '/', display: 'Home' },
    { path: '/aiassistance', display: 'Ai Guide' },
    { path: '/courses', display: 'Courses' },
    { path: '/about', display: 'About us' },
  ];

  return (
    <header className="w-9/12 mx-auto bg-[#f4f1de] shadow-sm py-2 rounded-full mt-4 ">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between flex-wrap gap-4 relative">

       
        <div className="flex items-center gap-3">
          
          <h2 className="text-xl font-semibold font-poppins">Aadhyam Paditham</h2>
        </div>

        
        <form
          action="/search"
          className="hidden sm:flex items-center border border-gray-300 rounded-3xl overflow-hidden bg-white w-[280px] h-[42px] "
        >
          <input
            type="text"
            placeholder="What do you want to learn?"
            name="q"
            className="px-3 py-2 text-sm font-extralight text-black outline-none w-full"
          />
          <button
            type="submit"
            className="px-3 py-2 text-orange-500 text-sm hover:text-orange-500 transition duration-300 ease-in-out"
          >
            Search
          </button>
        </form>

        
        <div className="flex items-center gap-4 sm:gap-6">
         
          <button
            className="sm:hidden text-2xl text-orange-500 focus:outline-none "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        
          <nav className="hidden sm:block">
            <ul className="flex gap-4 font-poppins text-base items-center ">
              {nav_titles.map((item) => (
                <li key={item.display} className=' hover:text-orange-500 transition duration-300 ease-in-out'>
                  <Link to={item.path}>{item.display}</Link>

                   
                 
                </li>
              ))}
            </ul>
          </nav>
        </div>

      
        {menuOpen && (
  <nav className="sm:hidden w-full mt-2">
    <ul className="flex flex-col gap-3 text-center font-poppins text-base bg-[#f4f1de] p-4 rounded-xl shadow">
      {nav_titles.map((item) => (
        <li key={item.display}>
          <Link
            to={item.path}
            className="hover:text-orange-500 transition duration-300 ease-in-out block"
            onClick={() => setMenuOpen(false)} // optional: close menu after click
          >
            {item.display}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)}


      </div>
    </header>
  );
}

export default Header;
