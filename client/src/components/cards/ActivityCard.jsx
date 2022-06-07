import React, { useRef } from 'react'
import activityImg from '../../img/icons/activity_check.svg'
import './ActivityCard.css'
export const ActivityCard = ({ item, active }) => {
  const ref = useRef(null)

  function handleActive() {
    clearActivity()
    setTimeout(() => {
      ref.current.classList.add('active')
    }, 0);
  }
  function clearActivity() {
    setTimeout(() => {
      let arr = document.querySelectorAll('.activity__item')
    for (const item of arr) {
      if (item.classList.contains('active')) {
        item.classList.remove('active')
      }
    }
    }, 0);
  }
  function firstActive() {
    clearActivity()
    setTimeout(() => {
      const item = document.querySelector('.activity__item')
      item !== null && item.classList.add('active')
    }, 0)
  }

  if (active !== null || active !== undefined) {
    clearActivity()
    setTimeout(() => {
      const items = document.querySelectorAll('.activity__item')
      for (let i = 0; i < items.length; i++) {
        if (active === 'Начальная') firstActive()
        else if (active === 'Средняя') items[1].classList.add('active')
        else items[2].classList.add('active')
      }
    }, 0)
  }


  return (
    <div className='activity__item' ref={ref} onClick={handleActive}>
      <div className='activity__title'>{item.name}</div>
      <div className='activity__group'>
        <div className='activity__desc'>{item.desc}</div>
        <img src={activityImg} alt='' className='activity__img' />
      </div>
    </div>
  )
}
