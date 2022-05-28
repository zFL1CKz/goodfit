import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { useHistory } from 'react-router-dom'
import './FiveWeeks.css'

export const FiveWeeks = () => {
  const [isBlock, setIsBlock] = useState(false)
  const [currentDay, setCurrentDay] = useState(JSON.parse(localStorage.getItem('training')).day)
  const [currentWeek, setCurrentWeek] = useState(JSON.parse(localStorage.getItem('training')).week)
  const titleInfo = document.querySelector('.header__title').innerHTML
  const history = useHistory()

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
    const localStorageItem = JSON.parse(localStorage.getItem('training'))
    setWeekActive(currentWeek)
    setCurrentDay(localStorageItem.day)
  }, [localStorage, currentDay, setCurrentDay])

  function setWeekActive(screen) {
    let navBg = document.querySelector('.training-nav--bg')
    if (screen === 1) navBg.style.left = '0'
    else if (screen === 2) navBg.style.left = '20%'
    else if (screen === 3) navBg.style.left = '40%'
    else if (screen === 4) navBg.style.left = '60%'
    else navBg.style.left = '80%'
    setCurrentWeek(screen)
  }

  function checkCurrentDay() {
    if (currentDay === 1 || currentDay === 8 || currentDay === 15 || currentDay === 22 || currentDay === 29)
      return (
        <>
          <iframe
            width='100%'
            height='200'
            src='https://www.youtube.com/embed/rzNBx_B4pQ4'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>

          <iframe
            width='100%'
            height='200'
            src='https://www.youtube.com/embed/p6nzMoRz7yw'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>

          <iframe
            width='100%'
            height='200'
            src='https://www.youtube.com/embed/c4pFF9pxzZg'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </>
      )
    else if (currentDay === 2 || currentDay === 9 || currentDay === 16 || currentDay === 23 || currentDay === 30)
      return (
        <>
          <iframe
            width='100%'
            height='200'
            src='https://www.youtube.com/embed/8oIhDdylESE'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </>
      )
    else if (currentDay === 3 || currentDay === 10 || currentDay === 17 || currentDay === 24 || currentDay === 31)
      return (
        <>
          <iframe
            width='100%'
            height='200'
            src='https://www.youtube.com/embed/rzNBx_B4pQ4'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
          <iframe
            width='100%'
            height='200'
            src='https://www.youtube.com/embed/uULz-RmZ4Ok'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </>
      )
    else if (currentDay === 4 || currentDay === 11 || currentDay === 18 || currentDay === 25 || currentDay === 32)
      return (
        <>
          <span className='relax'>Этот день нужно провести с пользой и без особой физической нагрузки</span>
        </>
      )
    else if (currentDay === 5 || currentDay === 12 || currentDay === 19 || currentDay === 26 || currentDay === 33)
      return (
        <>
          <iframe
            width='100%'
            height='200'
            src='https://www.youtube.com/embed/rzNBx_B4pQ4'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>

          <iframe
            width='100%'
            height='200'
            src='https://www.youtube.com/embed/-fKpU0J8BYc'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </>
      )
    else if (currentDay === 6 || currentDay === 13 || currentDay === 20 || currentDay === 27 || currentDay === 34)
      return (
        <>
          <iframe
            width='100%'
            height='200'
            src='https://www.youtube.com/embed/8oIhDdylESE'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </>
      )
    else if (currentDay === 7 || currentDay === 14 || currentDay === 21 || currentDay === 28 || currentDay === 35)
      return (
        <>
          <iframe
            width='100%'
            height='200'
            src='https://www.youtube.com/embed/rzNBx_B4pQ4'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
          <iframe
            width='100%'
            height='200'
            src='https://www.youtube.com/embed/AvS_GiMJ5Ck'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </>
      )
  }

  return (
    <>
      <nav className='training-nav'>
        <div className={currentWeek === 1 ? 'training-nav__item active' : 'training-nav__item'} onClick={() => setWeekActive(1)}>
          1 неделя
        </div>
        <div className={currentWeek === 2 ? 'training-nav__item active' : 'training-nav__item'} onClick={() => setWeekActive(2)}>
          2 неделя
        </div>
        <div className={currentWeek === 3 ? 'training-nav__item active' : 'training-nav__item'} onClick={() => setWeekActive(3)}>
          3 неделя
        </div>
        <div className={currentWeek === 4 ? 'training-nav__item active' : 'training-nav__item'} onClick={() => setWeekActive(4)}>
          4 неделя
        </div>
        <div className={currentWeek === 5 ? 'training-nav__item active' : 'training-nav__item'} onClick={() => setWeekActive(5)}>
          5 неделя
        </div>
        <div className='training-nav--bg'></div>
      </nav>

      {currentWeek === 1 && (
        <div className='slider'>
          <Slider {...sliderSettings}>
            <div className={`slider__item ${currentDay >= 1 ? 'unblock' : 'block'} ${currentDay > 1 && 'check'}`}>
              <div>
                <div className='slider__item-day'>День 1</div>
                <div className='slider__item-part'>Грудь</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 2 ? 'unblock' : 'block'} ${currentDay > 2 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 2</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 3 ? 'unblock' : 'block'} ${currentDay > 3 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 3</div>
                <div className='slider__item-part'>Спина</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 4 ? 'unblock' : 'block'} ${currentDay > 4 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 4</div>
                <div className='slider__item-part'>Отдых</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 5 ? 'unblock' : 'block'} ${currentDay > 5 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 5</div>
                <div className='slider__item-part'>Ноги</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 6 ? 'unblock' : 'block'} ${currentDay > 6 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 6</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 7 ? 'unblock' : 'block'} ${currentDay > 7 && 'check'}`}>
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
            <div className={`slider__item ${currentDay >= 8 ? 'unblock' : 'block'} ${currentDay > 8 && 'check'}`}>
              <div>
                <div className='slider__item-day'>День 8</div>
                <div className='slider__item-part'>Грудь</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 9 ? 'unblock' : 'block'} ${currentDay > 9 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 9</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 10 ? 'unblock' : 'block'} ${currentDay > 10 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 10</div>
                <div className='slider__item-part'>Спина</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 11 ? 'unblock' : 'block'} ${currentDay > 11 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 11</div>
                <div className='slider__item-part'>Отдых</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 12 ? 'unblock' : 'block'} ${currentDay > 12 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 12</div>
                <div className='slider__item-part'>Ноги</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 13 ? 'unblock' : 'block'} ${currentDay > 13 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 13</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 14 ? 'unblock' : 'block'} ${currentDay > 14 && 'check'}`}>
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
            <div className={`slider__item ${currentDay >= 15 ? 'unblock' : 'block'} ${currentDay > 15 && 'check'}`}>
              <div>
                <div className='slider__item-day'>День 15</div>
                <div className='slider__item-part'>Грудь</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 16 ? 'unblock' : 'block'} ${currentDay > 16 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 16</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 17 ? 'unblock' : 'block'} ${currentDay > 17 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 17</div>
                <div className='slider__item-part'>Спина</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 18 ? 'unblock' : 'block'} ${currentDay > 18 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 18</div>
                <div className='slider__item-part'>Отдых</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 19 ? 'unblock' : 'block'} ${currentDay > 19 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 19</div>
                <div className='slider__item-part'>Ноги</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 20 ? 'unblock' : 'block'} ${currentDay > 20 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 20</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 21 ? 'unblock' : 'block'} ${currentDay > 21 && 'check'}`}>
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
            <div className={`slider__item ${currentDay >= 22 ? 'unblock' : 'block'} ${currentDay > 22 && 'check'}`}>
              <div>
                <div className='slider__item-day'>День 22</div>
                <div className='slider__item-part'>Грудь</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 23 ? 'unblock' : 'block'} ${currentDay > 23 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 23</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 24 ? 'unblock' : 'block'} ${currentDay > 24 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 24</div>
                <div className='slider__item-part'>Спина</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 25 ? 'unblock' : 'block'} ${currentDay > 25 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 25</div>
                <div className='slider__item-part'>Отдых</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 26 ? 'unblock' : 'block'} ${currentDay > 26 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 26</div>
                <div className='slider__item-part'>Ноги</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 27 ? 'unblock' : 'block'} ${currentDay > 27 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 27</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 28 ? 'unblock' : 'block'} ${currentDay > 28 && 'check'}`}>
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
            <div className={`slider__item ${currentDay >= 29 ? 'unblock' : 'block'} ${currentDay > 29 && 'check'}`}>
              <div>
                <div className='slider__item-day'>День 29</div>
                <div className='slider__item-part'>Грудь</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 30 ? 'unblock' : 'block'} ${currentDay > 30 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 30</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 31 ? 'unblock' : 'block'} ${currentDay > 31 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 31</div>
                <div className='slider__item-part'>Спина</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 32 ? 'unblock' : 'block'} ${currentDay > 32 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 32</div>
                <div className='slider__item-part'>Отдых</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 33 ? 'unblock' : 'block'} ${currentDay > 33 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 33</div>
                <div className='slider__item-part'>Ноги</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 34 ? 'unblock' : 'block'} ${currentDay > 34 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>День 34</div>
                <div className='slider__item-part'>Пресс</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 35 ? 'unblock' : 'block'} ${currentDay > 35 && 'check'}`}>
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

      {checkCurrentDay()}

      {currentDay < 35 ? (
        <button
          className='training__btn--fiveweeks'
          onClick={() => {
            setCurrentDay(currentDay + 1)
            if (currentDay === 8) setCurrentWeek(2)
            if (currentDay === 15) setCurrentWeek(3)
            if (currentDay === 22) setCurrentWeek(4)
            if (currentDay === 29) setCurrentWeek(5)
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
      ) : (
        <button
          className='training__btn--fiveweeks'
          onClick={() => {
            localStorage.removeItem('training')
            window.location.reload()
          }}>
          Завершить программу
        </button>
      )}
    </>
  )
}
