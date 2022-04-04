import React from 'react'
import activityImg from '../../img/icons/activity_check.svg'
import './ActivityCard.css'

export const ActivityCard = ({ item }) => {
  return (
    <div className='activity__item' onClick={() => {}}>
      <div className='activity__title'>{item.name}</div>
      <div className='activity__group'>
        <div className='activity__desc'>{item.desc}</div>
        <img src={activityImg} alt='' className='activity__img' />
      </div>
    </div>
  )
}
