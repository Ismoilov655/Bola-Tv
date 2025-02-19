import React from 'react'
import telegram from '../img/telegram-logo.png'
import menu from '../img/menu.svg'
import { Link, NavLink } from 'react-router'

const Header = () => {
  return (

    <header className='bg-gradient-to-r from-[#FAEDDD] to-[#DBF0FB] py-7 md:pb-14'>
      <div className='w-full max-w-7xl mx-auto px-5 '>
        <div className='flex justify-between items-center md:mb-8'>
          <Link className='font-serif font-bold text-2xl sm:text-3xl' to="/">Bola tv</Link>
          <Link className='hidden md:inline-flex bg-blue-200 px-5 py-2 rounded-md transition-all duration-300 hover:bg-green-300' to=""><img className='w-5 mr-3' src={telegram} alt="Telegram logo" />Obuna bo'lish</Link>
          <button className='inline-block active:opacity-60 focus:outline-none md:hidden'><img src={menu} alt="menu" /></button>

        </div>
        <nav className='hidden md:flex justify-center items-center px-5 py-3 bg-white rounded-lg shadow-md'>
          <ul className='flex flex-wrap gap-x-9'>
            <li><NavLink className='text-xl font-medium transition-all duration-300 hover:text-green-600' to="/">Bosh sahifa</NavLink></li>
            <li><NavLink className='text-xl font-medium transition-all duration-300 hover:text-green-600' to="/ertaklar">Ertaklar</NavLink></li>
            <li><NavLink className='text-xl font-medium transition-all duration-300 hover:text-green-600' to="/multfilm">Multfilm</NavLink></li>
            <li><NavLink className='text-xl font-medium transition-all duration-300 hover:text-green-600' to="/qo'shiqlar">Qo'shiqlar</NavLink></li>
            <li><NavLink className='text-xl font-medium transition-all duration-300 hover:text-green-600' to="/qiziqarli matematika">Qiziqarli matematika</NavLink></li>
            <li><NavLink className='text-xl font-medium transition-all duration-300 hover:text-green-600' to="/ingliz tili">Ingliz tili</NavLink></li>
            <li><NavLink className='text-xl font-medium transition-all duration-300 hover:text-green-600' to="/badantarbiya">Badantarbiya</NavLink></li>
            <li><NavLink className='text-xl font-medium transition-all duration-300 hover:text-green-600' to="/rasm">Rasm</NavLink></li>
            <li><NavLink className='text-xl font-medium transition-all duration-300 hover:text-green-600' to="/murojaat">Murojaat</NavLink></li>

          </ul>
        </nav>
      </div>
    </header>

  )
}

export default Header