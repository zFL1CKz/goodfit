import React from 'react'
import './errorModal.css'

export const ErrorModal = ({ active, setActive, content }) => {
  return (
    <div className={active ? 'errorModal active' : 'errorModal'}>
      <div className='errorModal__content'>{content}</div>
      <div
        className='errorModal__overlay'
        onClick={() => setActive(false)}></div>
    </div>
  )
}
