import React, { useState } from 'react'
import './navbar.css'

export const NavBar = ({ checkScreen }) => {
  const [currentScreen, setSurrentScreen] = useState(1)

  function setNavActive(screen) {
    let navBg = document.querySelector('.nav--bg')
    if (screen === 1) navBg.style.left = '0'
    else if (screen === 2) navBg.style.left = '25%'
    else if (screen === 3) navBg.style.left = '50%'
    else navBg.style.left = '75%'
    setSurrentScreen(screen)
    checkScreen(screen)
  }

  return (
    <nav className='nav'>
      <div className='nav__wrapper'>
        <div
          className={currentScreen === 1 ? 'nav__item active' : 'nav__item'}
          onClick={() => setNavActive(1)}>
          <div className='nav__img'></div>
          <div className='nav__text'>Тренировки</div>
        </div>
        <div
          className={currentScreen === 2 ? 'nav__item active' : 'nav__item'}
          onClick={() => setNavActive(2)}>
          <div className='nav__img'></div>
          <div className='nav__text'>Цели</div>
        </div>
        <div
          className={currentScreen === 3 ? 'nav__item active' : 'nav__item'}
          onClick={() => setNavActive(3)}>
          <div className='nav__img'></div>
          <div className='nav__text'>Питание</div>
        </div>
        <div
          className={currentScreen === 4 ? 'nav__item active' : 'nav__item'}
          onClick={() => setNavActive(4)}>
          <div className='nav__img'></div>
          <div className='nav__text'>Профиль</div>
        </div>
        <div className='nav--bg'></div>
      </div>
    </nav>
  )
}
