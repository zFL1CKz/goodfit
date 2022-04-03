import React from 'react'
import './topCircle.css'

export const TopCircle = ({ text }) => {
  return (
    <header>
      <div className='header__title'>{text}</div>
    </header>
  )
}
