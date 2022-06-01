import React from 'react'
import './modal.css'

export const Modal = ({ active, setActive, children }) => {
  return (
    <div className={active ? 'modal show' : 'modal hidden'} onClick={() => setActive(false)}>
      <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
        {children}

        <button className='modal__btn' onClick={() => setActive(false)}>
          Закрыть
        </button>
      </div>
    </div>
  )
}