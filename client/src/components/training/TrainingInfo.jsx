import React, { useState } from 'react'
import back from '../../img/back.svg'
import { FiveWeeks } from './FiveWeeks'
import { From0To100 } from './From0To100'
import { VoinSparti } from './VoinSparti'
import './TrainingInfo.css'

export const TrainingInfo = ({ item, setInfo, started }) => {
  const focusInfo = item.querySelector('.training--focus')?.innerHTML.split(', ') || null
  const trainingInfo = item.querySelector('.training--info')?.innerHTML || null
  const titleInfo = item.querySelector('.training-item__title').innerHTML
  const [start, setStart] = useState(started)

  document.querySelector('.header__title').innerHTML = titleInfo
  item.querySelector('.training--focus')?.classList.add('show')
  item.querySelector('.training--info')?.classList.add('show')

  function checkTrainingName() {
    if (JSON.parse(localStorage.getItem('training')).name === '5 недель к эстетике') return <FiveWeeks />
    else if (JSON.parse(localStorage.getItem('training')).name === 'От 0 до 100') return <From0To100 />
    else return <VoinSparti />
  }

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
            zIndex: '2',
          }}
          onClick={() => {
            document.querySelector('.header__title').innerHTML = 'Тренировки'
            setInfo(null)
            item.querySelector('.training--focus').classList.remove('show')
          }}
        />

        <img src={item.querySelector('.training--bg').src} alt='' className='training--bg' />
        <div className='container'>
          <div className='training-info__title'>О программе</div>
          <div className='training-info__focus'>
            {focusInfo !== null && (
              <>
                <span>Фокус:</span>
                <br />
                <ul>
                  {focusInfo.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          {trainingInfo !== null && (
            <div className='training-info__info'>
              ВСТРEЧAЙTЕ ПРОГРАMМУ «BОИН СПAРTЫ 2.0» <br />
              Сoбрaв вoeдинo вcе знания и опыт была создaна прогpaмма «Вoин Cпapты 2.0»! Haбор «обopудoвания» оcтaлcя пpeжним, толькo Ты и Пoл, но тeпepь в игру вcтупает отягощeние в видe pюкзака!
              Нoвые упpaжнения, мощные cеты, дни пoд назвaниeм «ВЗPЫB» когда ты почувствуешь что такое работать со взрывной силой, продуманная последовательность упражнений и использования отягощения,
              чтобы заставить твои мышцы идти до предела и дальше! <br />
              Инструкция, техника и советы по выполнению упражнения, ВСЕ, В ВИДЕО ФОРМАТЕ <br />
              Подробное видео к каждому упражнению с техникой и советами!
            </div>
          )}
          <button
            className='training-info__btn'
            onClick={() => {
              let maxDays = 5
              if (titleInfo === '5 недель к эстетике') maxDays = 35
              else if (titleInfo === 'От 0 до 100') maxDays = 28
              else maxDays = 5
              localStorage.setItem('training', JSON.stringify({ name: titleInfo, week: 1, day: 1, maxDays: maxDays }))
              setStart(true)
            }}>
            Старт
          </button>
          <div style={{ height: '60px' }}></div>
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
            zIndex: '2',
          }}
          onClick={() => {
            document.querySelector('.header__title').innerHTML = 'Тренировки'
            setInfo(null)
            item.querySelector('.training--focus').classList.remove('show')
          }}
        />

        {checkTrainingName()}
      </>
    )
  }
}
