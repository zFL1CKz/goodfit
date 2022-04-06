import React, { useState } from 'react'
import { TopCircle } from '../../components/circles/topCircle'
import { NavBar } from '../../components/navbar/navbar'
import { GoalsPage } from '../GoalsPage/GoalsPage'
import { ProfilePage } from '../ProfilePage/ProfilePage'

export const MenuPage = () => {
  const [currentScreen, setCurrentScreen] = useState(1)
  function checkScreen(screen) {
    setCurrentScreen(screen)
  }

  return (
    <div>
      {currentScreen === 4 && (
        <div className='profile'>
          <TopCircle text='Профиль' />
          <ProfilePage />
        </div>
      )}

      {currentScreen === 2 && (
        <div className='profile'>
          <TopCircle text='Цели' />
          <GoalsPage />
        </div>
      )}

      <NavBar checkScreen={checkScreen} />
    </div>
  )
}
