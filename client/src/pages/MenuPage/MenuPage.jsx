import React, { useState } from 'react'
import { TopCircle } from '../../components/circles/topCircle'
import { NavBar } from '../../components/navbar/navbar'
import { FoodPage } from '../FoodPage/FoodPage'
import { GoalsPage } from '../GoalsPage/GoalsPage'
import { ProfilePage } from '../ProfilePage/ProfilePage'
import { TrainingPage } from '../TrainigsPage/TrainingsPage'

export const MenuPage = () => {
  const [currentScreen, setCurrentScreen] = useState(1)
  function checkScreen(screen) {
    setCurrentScreen(screen)
  }

  return (
    <div>
      {currentScreen === 1 && (
        <div className='profile'>
          <TopCircle text='Тренировки' />
          <TrainingPage />
        </div>
      )}

      {currentScreen === 2 && (
        <div className='profile'>
          <TopCircle text='Цели' />
          <GoalsPage />
        </div>
      )}

      {currentScreen === 3 && (
        <div className='profile'>
          <TopCircle text='Питание' />
          <FoodPage />
        </div>
      )}

      {currentScreen === 4 && (
        <div className='profile'>
          <TopCircle text='Профиль' />
          <ProfilePage />
        </div>
      )}

      <NavBar checkScreen={checkScreen} />
    </div>
  )
}
