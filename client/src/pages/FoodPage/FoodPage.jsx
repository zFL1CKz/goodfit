import React, { useCallback, useEffect, useState } from 'react'
import Slider from 'react-slick'
import { Modal } from '../../components/modals/modal'

import './FoodPage.css'

export const FoodPage = () => {
  const [modalActive, setModalActive] = useState(false)
  const currentDay = JSON.parse(localStorage.getItem('training'))?.day || 0
  const [selectedDay, setSelectedDay] = useState(currentDay)
  let [glasses, setGlasses] = useState(0)
  let [liters, setLiters] = useState('0.00')

  const maxDays = JSON.parse(localStorage.getItem('training'))?.maxDays || 0

  let days = []

  function checkDays() {
    for (let i = 1; i <= maxDays; i++) {
      days.push(i)
    }
  }

  checkDays()

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    swipeToSlide: true,
  }

  function addGlass() {
    setGlasses((glasses += 1))
    let div = document.createElement('div')
    div.classList.add('food__water-glass')
    document.querySelector('.food__water-glass-group').append(div)
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
    setLiters(parseFloat(liters) + 0.25)
  }

  if (JSON.parse(localStorage.getItem('training')) === null) {
    return <div className='food--error'>Чтобы этот раздел стал доступен, Вам необходимо начать любую из тренировок</div>
  } else {
    return (
      <div className='food'>
        <div className='food__slider'>
          <Slider {...sliderSettings}>
            {days.map((day, index) => {
              return (
                <div
                  className={`${day === currentDay ? 'food__slider_item unblock active' : day > currentDay ? 'food__slider_item' : 'food__slider_item unblock'}`}
                  key={index}
                  onClick={(e) => {
                    if (day <= currentDay) {
                      document.querySelector('.food__slider_item.active').classList.remove('active')
                      e.currentTarget.classList.add('active')
                      setSelectedDay(day)
                    } else return
                  }}>
                  <span className='food__slider_day'>День {day}</span>
                  <div className='food__slider_img'></div>
                </div>
              )
            })}
          </Slider>
        </div>

        <div className='food__info'>
          <div className='container'>
            <div className='food__remaining'>
              <div className='food__remaining-num'>2400</div>
              <div className='food__remaining-text fz20'>осталось</div>
              <div className='food__remaining-bar' style={{ marginBottom: '40px' }}>
                <div className='food__remaining-bar--fill'></div>
              </div>

              <div className='food__remaining-group'>
                <div className='food__remaining-group-item'>
                  <div className='food__remaining-title'>Белки</div>
                  <div className='food__remaining-bar'>
                    <div className='food__remaining-bar--fill bel'></div>
                  </div>
                  <div className='food__remaining-subtitle'>0 г</div>
                </div>

                <div className='food__remaining-group-item'>
                  <div className='food__remaining-title'>Жиры</div>
                  <div className='food__remaining-bar'>
                    <div className='food__remaining-bar--fill fat'></div>
                  </div>
                  <div className='food__remaining-subtitle'>0 г</div>
                </div>

                <div className='food__remaining-group-item'>
                  <div className='food__remaining-title'>Углеводы</div>
                  <div className='food__remaining-bar'>
                    <div className='food__remaining-bar--fill sug'></div>
                  </div>
                  <div className='food__remaining-subtitle'>0 г</div>
                </div>
              </div>

              <button className='food__remaining-btn' onClick={() => setModalActive(true)}>
                Подробности
              </button>
            </div>

            <div className='food__receipt'>
              <div className='food__title'>Приемы пищи</div>

              <div className='food__receipt-grid'>
                <div className='food__receipt-grid-item'>
                  <div className='food__receipt-title'>Завтрак</div>
                  <div className='food__receipt-img'></div>
                  <div className='food__receipt-text'>Добавить</div>
                </div>

                <div className='food__receipt-grid-item'>
                  <div className='food__receipt-title'>Обед</div>
                  <div className='food__receipt-img'></div>
                  <div className='food__receipt-text'>Добавить</div>
                </div>

                <div className='food__receipt-grid-item'>
                  <div className='food__receipt-title'>Ужин</div>
                  <div className='food__receipt-img'></div>
                  <div className='food__receipt-text'>Добавить</div>
                </div>

                <div className='food__receipt-grid-item'>
                  <div className='food__receipt-title'>Перекус</div>
                  <div className='food__receipt-img'></div>
                  <div className='food__receipt-text'>Добавить</div>
                </div>
              </div>
            </div>

            <div className='food__water'>
              <div className='food__title'>Отслеживание выпитой воды</div>

              <div className='food__water-title'>Вода</div>
              <div className='food__water-liter'>{liters} Л</div>

              <div className='food__water-glass-group'>
                <div className='food__water-glass add' onClick={addGlass}></div>
              </div>
            </div>
          </div>
        </div>

        <Modal active={modalActive} setActive={setModalActive}>
          <div className='food-modal__block'>
            <div className='food-modal__title'></div>
            <div className='food-modal__list'>
              <div className='food-modal__list-item'></div>
              <div className='food-modal__list-item'></div>
              <div className='food-modal__list-item'></div>
            </div>
          </div>

          <div className='food-modal__block'>
            <div className='food-modal__title'></div>
            <div className='food-modal__receipt'>
              <div className='food-modal__receipt-nav'>
                <div className='food-modal__receipt-nav-item'></div>
                <div className='food-modal__receipt-nav-item'></div>
                <div className='food-modal__receipt-nav-item'></div>
                <div className='food-modal__receipt-nav-item'></div>
              </div>

              <div className='food-modal__receipt-info'>
                <div className='food-modal__receipt-info-item'>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
