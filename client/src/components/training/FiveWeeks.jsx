import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import block from '../../img/icons/training--block.svg'
import unblock from '../../img/icons/training--unblock.svg'
import './FiveWeeks.css'

export const FiveWeeks = () => {
  const [isBlock, setIsBlock] = useState(false)
  const [currentDay, setCurrentDay] = useState(1)
  const titleInfo = document.querySelector('.header__title').innerHTML

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

  useEffect(() => {
    const localStorageItem = localStorage.getItem('training')
    setCurrentDay(
      Number(localStorageItem.slice(localStorageItem.length - 2, -1))
    )
  }, [localStorage, currentDay, setCurrentDay])

  const [currentWeek, setCurrentWeek] = useState(1)

  function setWeekActive(screen) {
    let navBg = document.querySelector('.training-nav--bg')
    if (screen === 1) navBg.style.left = '0'
    else if (screen === 2) navBg.style.left = '20%'
    else if (screen === 3) navBg.style.left = '40%'
    else if (screen === 4) navBg.style.left = '60%'
    else navBg.style.left = '80%'
    setCurrentWeek(screen)
  }

  return (
    <>
      <nav className='training-nav'>
        <div
          className={
            currentWeek === 1
              ? 'training-nav__item active'
              : 'training-nav__item'
          }
          onClick={() => setWeekActive(1)}>
          1 неделя
        </div>
        <div
          className={
            currentWeek === 2
              ? 'training-nav__item active'
              : 'training-nav__item'
          }
          onClick={() => setWeekActive(2)}>
          2 неделя
        </div>
        <div
          className={
            currentWeek === 3
              ? 'training-nav__item active'
              : 'training-nav__item'
          }
          onClick={() => setWeekActive(3)}>
          3 неделя
        </div>
        <div
          className={
            currentWeek === 4
              ? 'training-nav__item active'
              : 'training-nav__item'
          }
          onClick={() => setWeekActive(4)}>
          4 неделя
        </div>
        <div
          className={
            currentWeek === 5
              ? 'training-nav__item active'
              : 'training-nav__item'
          }
          onClick={() => setWeekActive(5)}>
          5 неделя
        </div>
        <div className='training-nav--bg'></div>
      </nav>

      {currentWeek === 1 && (
        <div className='slider'>
          <Slider {...sliderSettings}>
            <div
              className={`slider__item ${
                currentDay >= 1 ? 'unblock' : 'block'
              } ${currentDay > 1 && 'check'}`}>
              <div>
                <div className='slider__item-day'>День 1</div>
                <div className='slider__item-part'>Грудь</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 2 ? 'unblock' : 'block'
              } ${currentDay > 2 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 2</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 3 ? 'unblock' : 'block'
              } ${currentDay > 3 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 3</div>
                <div className='slider__item-part'>Спина</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 4 ? 'unblock' : 'block'
              } ${currentDay > 4 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 4</div>
                <div className='slider__item-part'>Отдых</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 5 ? 'unblock' : 'block'
              } ${currentDay > 5 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 5</div>
                <div className='slider__item-part'>Ноги</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 6 ? 'unblock' : 'block'
              } ${currentDay > 6 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 6</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 7 ? 'unblock' : 'block'
              } ${currentDay > 7 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 7</div>
                <div className='slider__item-part'>Кардио</div>
              </div>
              <div className='slider__item-img'></div>
            </div>
          </Slider>
        </div>
      )}

      {currentWeek === 2 && (
        <div className='slider'>
          <Slider {...sliderSettings}>
            <div
              className={`slider__item ${
                currentDay >= 8 ? 'unblock' : 'block'
              } ${currentDay > 8 && 'check'}`}>
              <div>
                <div className='slider__item-day'>День 8</div>
                <div className='slider__item-part'>Грудь</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 9 ? 'unblock' : 'block'
              } ${currentDay > 9 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 9</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 10 ? 'unblock' : 'block'
              } ${currentDay > 10 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 10</div>
                <div className='slider__item-part'>Спина</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 11 ? 'unblock' : 'block'
              } ${currentDay > 11 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 11</div>
                <div className='slider__item-part'>Отдых</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 12 ? 'unblock' : 'block'
              } ${currentDay > 12 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 12</div>
                <div className='slider__item-part'>Ноги</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 13 ? 'unblock' : 'block'
              } ${currentDay > 13 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 13</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 14 ? 'unblock' : 'block'
              } ${currentDay > 14 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 14</div>
                <div className='slider__item-part'>Кардио</div>
              </div>
              <div className='slider__item-img'></div>
            </div>
          </Slider>
        </div>
      )}

      {currentWeek === 3 && (
        <div className='slider'>
          <Slider {...sliderSettings}>
            <div
              className={`slider__item ${
                currentDay >= 15 ? 'unblock' : 'block'
              } ${currentDay > 15 && 'check'}`}>
              <div>
                <div className='slider__item-day'>День 15</div>
                <div className='slider__item-part'>Грудь</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 16 ? 'unblock' : 'block'
              } ${currentDay > 16 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 16</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 17 ? 'unblock' : 'block'
              } ${currentDay > 17 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 17</div>
                <div className='slider__item-part'>Спина</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 18 ? 'unblock' : 'block'
              } ${currentDay > 18 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 18</div>
                <div className='slider__item-part'>Отдых</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 19 ? 'unblock' : 'block'
              } ${currentDay > 19 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 19</div>
                <div className='slider__item-part'>Ноги</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 20 ? 'unblock' : 'block'
              } ${currentDay > 20 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 20</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 21 ? 'unblock' : 'block'
              } ${currentDay > 21 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 21</div>
                <div className='slider__item-part'>Кардио</div>
              </div>
              <div className='slider__item-img'></div>
            </div>
          </Slider>
        </div>
      )}

      {currentWeek === 4 && (
        <div className='slider'>
          <Slider {...sliderSettings}>
            <div
              className={`slider__item ${
                currentDay >= 22 ? 'unblock' : 'block'
              } ${currentDay > 22 && 'check'}`}>
              <div>
                <div className='slider__item-day'>День 22</div>
                <div className='slider__item-part'>Грудь</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 23 ? 'unblock' : 'block'
              } ${currentDay > 23 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 23</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 24 ? 'unblock' : 'block'
              } ${currentDay > 24 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 24</div>
                <div className='slider__item-part'>Спина</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 25 ? 'unblock' : 'block'
              } ${currentDay > 25 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 25</div>
                <div className='slider__item-part'>Отдых</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 26 ? 'unblock' : 'block'
              } ${currentDay > 26 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 26</div>
                <div className='slider__item-part'>Ноги</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 27 ? 'unblock' : 'block'
              } ${currentDay > 27 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 27</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 28 ? 'unblock' : 'block'
              } ${currentDay > 28 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 28</div>
                <div className='slider__item-part'>Кардио</div>
              </div>
              <div className='slider__item-img'></div>
            </div>
          </Slider>
        </div>
      )}

      {currentWeek === 5 && (
        <div className='slider'>
          <Slider {...sliderSettings}>
            <div
              className={`slider__item ${
                currentDay >= 29 ? 'unblock' : 'block'
              } ${currentDay > 29 && 'check'}`}>
              <div>
                <div className='slider__item-day'>День 29</div>
                <div className='slider__item-part'>Грудь</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 30 ? 'unblock' : 'block'
              } ${currentDay > 30 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 30</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 31 ? 'unblock' : 'block'
              } ${currentDay > 31 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 31</div>
                <div className='slider__item-part'>Спина</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 32 ? 'unblock' : 'block'
              } ${currentDay > 32 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 32</div>
                <div className='slider__item-part'>Отдых</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 33 ? 'unblock' : 'block'
              } ${currentDay > 33 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 33</div>
                <div className='slider__item-part'>Ноги</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 34 ? 'unblock' : 'block'
              } ${currentDay > 34 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 34</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div
              className={`slider__item ${
                currentDay >= 35 ? 'unblock' : 'block'
              } ${currentDay > 35 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 35</div>
                <div className='slider__item-part'>Кардио</div>
              </div>
              <div className='slider__item-img'></div>
            </div>
          </Slider>
        </div>
      )}

      <button
        className='training__btn--fiveweeks'
        onClick={() => {
          setCurrentDay(currentDay + 1)
          localStorage.removeItem('training')
          localStorage.setItem(
            'training',
            JSON.stringify({
              name: titleInfo,
              week: currentWeek,
              day: currentDay + 1,
            })
          )
        }}>
        Завершить день
      </button>
    </>
  )
}
