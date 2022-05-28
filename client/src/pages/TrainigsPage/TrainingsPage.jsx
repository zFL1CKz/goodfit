import React, { useState } from 'react'
import tap from '../../img/training/tap.svg'
import biceps from '../../img/training/biceps.svg'
import blueBiceps from '../../img/training/blue-biceps.svg'
import img1 from '../../img/training/1.jpg'
import img2 from '../../img/training/2.jpg'
import img3 from '../../img/training/3.jpg'
import { TrainingInfo } from '../../components/training/TrainingInfo'
import './TrainingsPage.css'

export const TrainingPage = () => {
  const [info, setInfo] = useState(null)
  const [start, setStart] = useState(false)

  return (
    <>
      {info === null ? (
        <>
          <div
            className='training-item'
            onClick={(e) => {
              if (JSON.parse(localStorage.getItem('training'))?.name === '5 недель к эстетике') {
                setStart(true)
                setInfo(e.currentTarget)
              } else {
                setStart(false)
                setInfo(e.currentTarget)
              }
            }}>
            <div className='training-item__title'>5 недель к эстетике</div>
            <div className='training-item__subtitle'>
              <span>Сложность:</span>
              <div className='training-item__group'>
                <img src={blueBiceps} alt='' />
                <img src={blueBiceps} alt='' />
                <img src={blueBiceps} alt='' />
                <img src={biceps} alt='' />
                <img src={biceps} alt='' />
              </div>
            </div>
            <div className='training--focus'>Целенаправленная проработка мышечных групп, Развитие выносливости, Создание эстетичной фигуры</div>
            <img src={img1} alt='' className='training--bg' />
            <img src={tap} alt='' className='training--tap' />
          </div>

          <div
            className='training-item'
            onClick={(e) => {
              if (JSON.parse(localStorage.getItem('training'))?.name === 'От 0 до 100') {
                setStart(true)
                setInfo(e.currentTarget)
              } else {
                setStart(false)
                setInfo(e.currentTarget)
              }
            }}>
            <div className='training-item__title'>От 0 до 100</div>
            <div className='training-item__subtitle'>
              <span>Сложность:</span>
              <div className='training-item__group'>
                <img src={blueBiceps} alt='' />
                <img src={blueBiceps} alt='' />
                <img src={blueBiceps} alt='' />
                <img src={blueBiceps} alt='' />
                <img src={biceps} alt='' />
              </div>
            </div>
            <div className='training--focus'>Развить выносливость, Построить сухую форму, Накачать пресс</div>
            <img src={img2} alt='' className='training--bg' />
            <img src={tap} alt='' className='training--tap' />
          </div>

          <div
            className='training-item'
            onClick={(e) => {
              if (JSON.parse(localStorage.getItem('training'))?.name === 'Воин спарты 2.0') {
                setStart(true)
                setInfo(e.currentTarget)
              } else {
                setStart(false)
                setInfo(e.currentTarget)
              }
            }}>
            <div className='training-item__title'>Воин спарты 2.0</div>
            <div className='training-item__subtitle'>
              <span>Сложность:</span>
              <div className='training-item__group'>
                <img src={blueBiceps} alt='' />
                <img src={blueBiceps} alt='' />
                <img src={blueBiceps} alt='' />
                <img src={biceps} alt='' />
                <img src={biceps} alt='' />
              </div>
            </div>
            <div className='training--focus'>Нема</div>
            <img src={img3} alt='' className='training--bg' />
            <img src={tap} alt='' className='training--tap' />
          </div>
        </>
      ) : (
        <TrainingInfo item={info} setInfo={setInfo} started={start} />
      )}
    </>
  )
}
