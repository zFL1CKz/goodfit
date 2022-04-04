import React, { useEffect, useRef, useState } from 'react'
import activityImg from '../../img/icons/activity_check.svg'
import './ActivityCard.css'
export const ActivityCard = ({ item }) => {
  const ref = useRef(null)

  function handleActive() {
    clearActivity()
    ref.current.classList.add('active')
  }
  function clearActivity() {
    let arr = document.querySelectorAll('.activity__item')
    for (const item of arr) {
      if (item.classList.contains('active')) {
        item.classList.remove('active')
        break
      }
    }
  }
  function firstActive() {
    setTimeout(() => {
      const item = document.querySelector('.activity__item')
      item !== null && item.classList.add('active')
    }, 0)
  }
  firstActive()

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
