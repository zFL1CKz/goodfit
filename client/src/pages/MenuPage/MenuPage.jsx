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
        <>
          <TopCircle text='Тренировки' />
          <TrainingPage />
        </>
      )}

      {currentScreen === 2 && (
        <>
          <TopCircle text='Цели' />
          <GoalsPage />
        </>
      )}

      {currentScreen === 3 && (
        <>
          <TopCircle text='Питание' />
          <FoodPage />
        </>
      )}

      {currentScreen === 4 && (
        <>
          <TopCircle text='Профиль' />
          <ProfilePage />
        </>
      )}

      <NavBar checkScreen={checkScreen} />
    </div>
  )
}
