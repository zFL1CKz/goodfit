import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { Modal } from '../modals/modal'
import './FiveWeeks.css'

export const From0To100 = () => {
  const [modalActive, setModalActive] = useState(false)

  const [currentDay, setCurrentDay] = useState(JSON.parse(localStorage.getItem('training')).day)
  const [currentWeek, setCurrentWeek] = useState(JSON.parse(localStorage.getItem('training')).week)
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
    const localStorageItem = JSON.parse(localStorage.getItem('training'))
    setWeekActive(currentWeek)
    setCurrentDay(localStorageItem.day)
  }, [localStorage, currentDay, setCurrentDay])

  function setWeekActive(screen) {
    let navBg = document.querySelector('.training-nav--bg')
    if (screen === 1) navBg.style.left = '0'
    else if (screen === 2) navBg.style.left = '25%'
    else if (screen === 3) navBg.style.left = '50%'
    else navBg.style.left = '75%'
    setCurrentWeek(screen)
  }

  function checkCurrentDay() {
    if (currentDay === 1 || currentDay === 8 || currentDay === 15 || currentDay === 22)
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
    else if (currentDay === 2 || currentDay === 9 || currentDay === 16 || currentDay === 23)
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
    else if (currentDay === 3 || currentDay === 10 || currentDay === 17 || currentDay === 24)
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
            src='https://www.youtube.com/embed/8oIhDdylESE'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </>
      )
    else if (currentDay === 4 || currentDay === 11 || currentDay === 18 || currentDay === 25)
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
            src='https://www.youtube.com/embed/XbDbyMJYQc0'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </>
      )
    else if (currentDay === 5 || currentDay === 12 || currentDay === 19 || currentDay === 26)
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
    else if (currentDay === 6 || currentDay === 13 || currentDay === 20 || currentDay === 27)
      return (
        <>
          <span className='relax'>???????? ???????? ?????????? ???????????????? ?? ?????????????? ?? ?????? ???????????? ???????????????????? ????????????????</span>
        </>
      )
    else if (currentDay === 7 || currentDay === 14 || currentDay === 21 || currentDay === 28)
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
            src='https://www.youtube.com/embed/8oIhDdylESE'
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
          1 ????????????
        </div>
        <div className={currentWeek === 2 ? 'training-nav__item active' : 'training-nav__item'} onClick={() => setWeekActive(2)}>
          2 ????????????
        </div>
        <div className={currentWeek === 3 ? 'training-nav__item active' : 'training-nav__item'} onClick={() => setWeekActive(3)}>
          3 ????????????
        </div>
        <div className={currentWeek === 4 ? 'training-nav__item active' : 'training-nav__item'} onClick={() => setWeekActive(4)}>
          4 ????????????
        </div>
        <div className='training-nav--bg bg--from0to100'></div>
      </nav>

      {currentWeek === 1 && (
        <div className='slider'>
          <Slider {...sliderSettings}>
            <div className={`slider__item ${currentDay >= 1 ? 'unblock' : 'block'} ${currentDay > 1 && 'check'}`}>
              <div>
                <div className='slider__item-day'>???????? 1</div>
                <div className='slider__item-part'>??????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 2 ? 'unblock' : 'block'} ${currentDay > 2 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 2</div>
                <div className='slider__item-part'>????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 3 ? 'unblock' : 'block'} ${currentDay > 3 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 3</div>
                <div className='slider__item-part'>??????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 4 ? 'unblock' : 'block'} ${currentDay > 4 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 4</div>
                <div className='slider__item-part'>????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 5 ? 'unblock' : 'block'} ${currentDay > 5 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 5</div>
                <div className='slider__item-part'>????????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 6 ? 'unblock' : 'block'} ${currentDay > 6 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 6</div>
                <div className='slider__item-part'>??????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 7 ? 'unblock' : 'block'} ${currentDay > 7 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 7</div>
                <div className='slider__item-part'>??????????</div>
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
                <div className='slider__item-day'>???????? 8</div>
                <div className='slider__item-part'>??????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 9 ? 'unblock' : 'block'} ${currentDay > 9 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 9</div>
                <div className='slider__item-part'>????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 10 ? 'unblock' : 'block'} ${currentDay > 10 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 10</div>
                <div className='slider__item-part'>??????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 11 ? 'unblock' : 'block'} ${currentDay > 11 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 11</div>
                <div className='slider__item-part'>????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 12 ? 'unblock' : 'block'} ${currentDay > 12 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 12</div>
                <div className='slider__item-part'>????????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 13 ? 'unblock' : 'block'} ${currentDay > 13 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 13</div>
                <div className='slider__item-part'>??????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 14 ? 'unblock' : 'block'} ${currentDay > 14 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 14</div>
                <div className='slider__item-part'>??????????</div>
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
                <div className='slider__item-day'>???????? 15</div>
                <div className='slider__item-part'>??????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 16 ? 'unblock' : 'block'} ${currentDay > 16 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 16</div>
                <div className='slider__item-part'>????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 17 ? 'unblock' : 'block'} ${currentDay > 17 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 17</div>
                <div className='slider__item-part'>??????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 18 ? 'unblock' : 'block'} ${currentDay > 18 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 18</div>
                <div className='slider__item-part'>????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 19 ? 'unblock' : 'block'} ${currentDay > 19 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 19</div>
                <div className='slider__item-part'>????????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 20 ? 'unblock' : 'block'} ${currentDay > 20 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 20</div>
                <div className='slider__item-part'>??????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 21 ? 'unblock' : 'block'} ${currentDay > 21 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 21</div>
                <div className='slider__item-part'>??????????</div>
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
                <div className='slider__item-day'>???????? 22</div>
                <div className='slider__item-part'>??????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 23 ? 'unblock' : 'block'} ${currentDay > 23 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 23</div>
                <div className='slider__item-part'>????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 24 ? 'unblock' : 'block'} ${currentDay > 24 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 24</div>
                <div className='slider__item-part'>??????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 25 ? 'unblock' : 'block'} ${currentDay > 25 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 25</div>
                <div className='slider__item-part'>????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 26 ? 'unblock' : 'block'} ${currentDay > 26 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 26</div>
                <div className='slider__item-part'>????????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 27 ? 'unblock' : 'block'} ${currentDay > 27 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 27</div>
                <div className='slider__item-part'>??????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>

            <div className={`slider__item ${currentDay >= 28 ? 'unblock' : 'block'} ${currentDay > 28 && 'check'}`}>
              {' '}
              <div>
                <div className='slider__item-day'>???????? 28</div>
                <div className='slider__item-part'>??????????</div>
              </div>
              <div className='slider__item-img'></div>
            </div>
          </Slider>
        </div>
      )}

      {checkCurrentDay()}

      {currentDay < 28 ? (
        <button
          className='training__btn--fiveweeks'
          onClick={() => {
            setCurrentDay(currentDay + 1)
            if (currentDay === 7) setCurrentWeek(2)
            if (currentDay === 14) setCurrentWeek(3)
            if (currentDay === 21) setCurrentWeek(4)
            localStorage.removeItem('training')
            localStorage.setItem(
              'training',
              JSON.stringify({
                name: titleInfo,
                week: currentWeek,
                maxDays: 28,
                day: currentDay + 1,
              })
            )
          }}>
          ?????????????????? ????????
        </button>
      ) : (
        <button
          className='training__btn--fiveweeks'
          onClick={() => {
            setModalActive(true)
          }}>
          ?????????????????? ??????????????????
        </button>
      )}

      <Modal active={modalActive} setActive={setModalActive}>
        <div className='training-modal__title'>???? ?????????????? ???????????? ?????????????? ????????????????????!</div>
        <div className='training-modal__content'>{`??????????????????????! ???? ???????????? ?????????????? "${document.querySelector('.header__title').innerHTML}". ???????????? ???? ????????????  ?????????????????? ?????? ?????? ???????????? ????????????.`}</div>

        <button
          className='modal__btn'
          style={{ marginBottom: '10px' }}
          onClick={() => {
            setModalActive(false)
            setCurrentDay(1)
            setWeekActive(1)
            localStorage.removeItem('training')
            localStorage.setItem(
              'training',
              JSON.stringify({
                name: titleInfo,
                week: currentWeek,
                maxDays: 28,
                day: 1,
              })
            )
          }}>
          ???????????? ????????????
        </button>
        <button
          className='modal__btn'
          onClick={() => {
            setModalActive(false)
            localStorage.removeItem('training')
            window.location.reload()
          }}>
          ???????????? ????????????????????
        </button>
      </Modal>
    </>
  )
}
