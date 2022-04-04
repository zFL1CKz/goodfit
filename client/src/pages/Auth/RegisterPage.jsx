import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { Link } from 'react-router-dom'
import { TopCircle } from '../../components/circles/topCircle'
import { ErrorModal } from '../../components/modals/errorModal'
import { StartScreen } from '../../components/startscreen/startScreen'
import authModule from '../../modules/Auth.module.css'
import screenImg5 from '../../img/startScreens/5.jpg'
import { Loader } from '../../components/loader/Loader'
import { ActivityCard } from '../../components/cards/ActivityCard'

export const RegisterPage = () => {
  const { token } = useContext(AuthContext)
  const { request } = useHttp()

  // const [modalActive, setModalActive] = useState(false)
  const [isReady, setIsReady] = useState(true)
  const [screen, setScreen] = useState(6)
  const [validForm, setValidForm] = useState(false)
  const [activities, setActivities] = useState([])
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  function checkForm() {
    if (form.password.length >= 6 && form.password === form.confirmPassword) {
      setValidForm(true)
      setScreen(5)
    } else console.log('validError')
  }

  const setNewScreen = (screen) => {
    setScreen(screen)
  }

  const getActivity = useCallback(async () => {
    setIsReady(false)
    try {
      await request('/api/getactivity', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        setActivities(res)
        setIsReady(true)
      })
    } catch (error) {
      console.log(error)
    }
  }, [token, request, activities.length])

  useEffect(() => {
    if (screen === 6) getActivity()
  }, [screen, getActivity])

  if (!isReady) {
    return <Loader />
  } else {
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

        {screen === 5 && (
          <div>
            <TopCircle text={'Step 1 of 3'} />
            <img src={screenImg5} alt='' className={authModule.auth__img} />

            <div className={authModule.auth__footer_circle}>
              <div>
                <div className={authModule.auth__footer_title}>
                  Добро пожаловать в приложение GoodFIT
                </div>
                <div className={authModule.auth__footer_desc}>
                  Индивидуальные тренировки помогут вам набраться сил, прийти в
                  лучшую форму и вести здоровый образ жизни
                </div>
                <button
                  onClick={() => setScreen(6)}
                  className={authModule.auth__footer_btn}>
                  Начать
                </button>
                <div className={authModule.auth__footer_circleBtns}>
                  <div
                    className={`${authModule.auth__footer_circleBtn} ${authModule.active}`}></div>
                  <div className={authModule.auth__footer_circleBtn}></div>
                  <div className={authModule.auth__footer_circleBtn}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {screen === 6 && (
          <div>
            <TopCircle text={'Step 2 of 3'} />
            <div className='container'>
              <div className={`${authModule.auth__title} ${authModule.mb60}`}>
                Выберите степень физической активности
              </div>
              <div className={authModule.auth__subtitle}></div>
              <div className='activity'>
                {activities.map((item, index) => {
                  return <ActivityCard key={index} item={item} />
                })}
              </div>
              <div className={authModule.absolute}>
                <div className='container'>
                  <div
                    className={authModule.auth__btn}
                    onClick={() => setScreen(7)}>
                    Далее
                  </div>
                </div>
                <div className={authModule.auth__circles}>
                  <div className={authModule.auth__circle}></div>
                  <div
                    className={`${authModule.auth__circle} ${authModule.active}`}></div>
                  <div className={authModule.auth__circle}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {screen === 7 && (
          <div>
            <TopCircle text={'Step 2 of 3'} />
            <div className='container'>
              <div className={authModule.auth__title}>Личные данные</div>
              <div className={authModule.auth__subtitle}>
                Дайте нам знать о себе, чтобы ускорить результат, привести себя
                в форму с помощью вашего личного плана тренировок!
              </div>

              <div className={authModule.auth__info}>
                <div className={authModule.auth__calc}></div>
              </div>

              <div className={authModule.absolute}>
                <div className='container'>
                  <div
                    className={authModule.auth__btn}
                    onClick={() => setScreen(7)}>
                    Далее
                  </div>
                </div>
                <div className={authModule.auth__circles}>
                  <div className={authModule.auth__circle}></div>
                  <div
                    className={`${authModule.auth__circle} ${authModule.active}`}></div>
                  <div className={authModule.auth__circle}></div>
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
}
