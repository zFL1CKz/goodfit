import React from 'react'
import screenImg1 from '../../img/startScreens/1.jpg'
import screenImg2 from '../../img/startScreens/2.jpg'
import screenImg3 from '../../img/startScreens/3.jpg'
import './startScreen.css'

export const StartScreen = ({ screen, title, desc, setNewScreen }) => {
  function getScreenImg() {
    if (screen === 1) return screenImg1
    else if (screen === 2) return screenImg2
    else return screenImg3
  }

  return (
    <div className='screen'>
      <img src={getScreenImg()} alt='' className='screen__img' />

      <div className='footer__screen_circle'>
        <div className='screen__content'>
          <div className='screen__title'>{title}</div>
          <div className={`screen__desc ${screen === 3 && 'mb20'}`}>{desc}</div>
          <div className='screen__circles'>
            <div className={`screen__circle ${screen === 1 && 'active'}`}></div>
            <div className={`screen__circle ${screen === 2 && 'active'}`}></div>
            <div className={`screen__circle ${screen === 3 && 'active'}`}></div>
          </div>
          <button
            className='screen__btn'
            onClick={() => setNewScreen(screen + 1)}>
            Далее
          </button>
        </div>
      </div>
    </div>
  )
}
