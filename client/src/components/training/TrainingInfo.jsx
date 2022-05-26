import React, { useState } from 'react'
import back from '../../img/back.svg'
import { FiveWeeks } from './FiveWeeks'
import './TrainingInfo.css'

export const TrainingInfo = ({ item, setInfo }) => {
  const focusInfo = item.querySelector('.training--focus').innerHTML.split(', ')
  const titleInfo = item.querySelector('.training-item__title').innerHTML
  const [start, setStart] = useState(false)

  document.querySelector('.header__title').innerHTML = titleInfo
  item.querySelector('.training--focus').classList.add('show')

  if (!start) {
    return (
      <>
        <img
          src={back}
          alt=''
          style={{
            position: 'absolute',
            top: '50px',
            left: '50px',
          }}
          onClick={() => {
            document.querySelector('.header__title').innerHTML = 'Тренировки'
            setInfo(null)
            item.querySelector('.training--focus').classList.remove('show')
          }}
        />

        <img
          src={item.querySelector('.training--bg').src}
          alt=''
          style={{ marginBottom: '40px' }}
        />
        <div className='container'>
          <div className='training-info__title'>О программе</div>
          <div className='training-info__focus'>
            <span>Фокус:</span>
            <br />
            <ul>
              {focusInfo.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
          <button
            className='training-info__btn'
            onClick={() => {
              localStorage.setItem(
                'training',
                JSON.stringify({ name: titleInfo, week: 1, day: 1 })
              )
              setStart(true)
            }}>
            Старт
          </button>
        </div>
      </>
    )
  } else {
    return (
      <>
        <img
          src={back}
          alt=''
          style={{
            position: 'absolute',
            top: '50px',
            left: '50px',
          }}
          onClick={() => {
            document.querySelector('.header__title').innerHTML = 'Тренировки'
            setInfo(null)
            item.querySelector('.training--focus').classList.remove('show')
          }}
        />
        <FiveWeeks />
      </>
    )
  }
}
