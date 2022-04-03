import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TopCircle } from '../../components/circles/topCircle'
import { ErrorModal } from '../../components/modals/errorModal'
import { StartScreen } from '../../components/startscreen/startScreen'
import authModule from '../../modules/Auth.module.css'

export const RegisterPage = () => {
  const [modalActive, setModalActive] = useState(false)
  const [screen, setScreen] = useState(1)
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  function checkForm() {
    if (form.password < 6 || form.password !== form.confirmPassword) {
      // setModalActive(true)
    }
  }

  const setNewScreen = (screen) => {
    setScreen(screen)
  }

  return (
    <div>
      {screen === 1 && (
        <StartScreen
          screen={screen}
          title='GoodFIT'
          desc='Быть здоровым - это все, отсутствие здоровья - это ничто.'
          setNewScreen={setNewScreen}
        />
      )}
      {screen === 2 && (
        <StartScreen
          screen={screen}
          title='Be stronger'
          desc='Занимайся спортом от 30-ти минут в день.'
          setNewScreen={setNewScreen}
        />
      )}
      {screen === 3 && (
        <StartScreen
          screen={screen}
          title='Have 
          nice body'
          desc='Хорошая форма тела, качественный сон, прилив сил, снижение веса, прочные кости, хороший метаболизм'
          setNewScreen={setNewScreen}
        />
      )}
      {screen === 4 && (
        <div>
          <TopCircle text='Регистрация' />
          <div className='container'>
            <div className='auth'>
              <input
                type='text'
                className={authModule.auth__input}
                name='email'
                onChange={changeHandler}
                placeholder='Email'
              />
              <input
                type='password'
                className={authModule.auth__input}
                name='password'
                onChange={changeHandler}
                placeholder='Пароль'
              />
              <input
                type='password'
                className={authModule.auth__input}
                name='confirmPassword'
                onChange={changeHandler}
                placeholder='Повторите пароль'
              />
              <div className={authModule.authBottom}>
                <Link to='/login' className={authModule.auth__text}>
                  Уже есть аккаунт?
                </Link>
                <button
                  className={authModule.auth__btn}
                  onClick={() => checkForm()}>
                  Регистрация
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <ErrorModal active={modalActive} setActive={setModalActive}>
        test
      </ErrorModal> */}
    </div>
  )
}
