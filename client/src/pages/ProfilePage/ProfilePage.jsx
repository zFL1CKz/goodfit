import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { Loader } from '../../components/loader/Loader'
import InputMask from 'react-input-mask'
import dayjs from 'dayjs'

import authModule from '../../modules/Auth.module.css'
import profileModule from '../../modules/Profile.module.css'
import errorModule from '../../modules/Error.module.css'
import { ActivityCard } from '../../components/cards/ActivityCard'

export const ProfilePage = () => {
  const { token } = useContext(AuthContext)
  const { request, error, clearError } = useHttp()
  const [userInfo, setUserInfo] = useState([])

  const [validError, setValidError] = useState('')
  const [isReady, setIsReady] = useState(false)
  const [isChecked, setIsChecked] = useState(true)
  const [genderIsMale, setGenderIsMale] = useState(true)
  const [activities, setActivities] = useState([])
  const [genders, setGenders] = useState([])
  const [resultDate, setResultDate] = useState()

  const [info, setInfo] = useState({
    birth: '',
    height: '',
    weight: '',
  })

  const infoHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setValidError(error)
  }, [error, clearError])

  const getUserInfo = useCallback(async () => {
    try {
      await request('/api/getuserinfo', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        setUserInfo(res)
        setTimeout(() => {
          setIsChecked(res.info.caloriesCalc)
          info.birth = new Date(res.info.birth).toLocaleDateString()
          setResultDate(
            new Date(res.info.birth).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
          )
          info.height = res.info.height
          info.weight = res.info.weight
          if (res.info.gender.name === 'Мужской') setGenderIsMale(true)
          else setGenderIsMale(false)
        }, 0)
        setIsReady(true)
      })
    } catch (error) {
      console.log(error)
    }
    try {
      await request('/api/getactivity', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        setActivities(res)
      })
    } catch (error) {
      console.log(error)
    }
    try {
      await request('/api/getgenders', 'GET', null).then((res) => {
        setGenders(res)
      })
    } catch (error) {
      console.log(error)
    }
  }, [token, request, activities.length, userInfo.length, genders.length])

  const validInfo = useCallback(async () => {
    let date = info.birth.split('.')
    if (
      info.birth === '' ||
      Number(date[2]) >= new Date().getFullYear() ||
      Number(date[2] < new Date().getFullYear() - 100) ||
      !dayjs(new Date(`${date[1]}.${date[0]}.${date[2]}`)).isValid()
    )
      setValidError('Некорректная дата рождения')
    else if (info.height === '' || info.height == 0)
      setValidError('Поле "Рост" не может быть пустым!')
    else if (info.weight === '' || info.weight == 0)
      setValidError('Поле "Вес" не может быть пустым!')
    else {
      setIsReady(false)
      setValidError('')
      let arr = document.querySelectorAll('.activity__item')
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains('active')) {
          var currentActivity = activities[i]
          break
        }
      }
      let reqObject = {
        activity: currentActivity._id,
        caloriesCalc: isChecked,
        birth: new Date(`${date[1]}.${date[0]}.${date[2]}`).toISOString(),
        height: info.height,
        weight: info.weight,
        gender: genderIsMale ? genders[0]._id : genders[1]._id,
      }
      try {
        await request(
          '/api/setuserinfo',
          'POST',
          {
            ...reqObject,
          },
          {
            Authorization: `Bearer ${token}`,
          }
        )
        getUserInfo()
      } catch (error) {
        console.log(error)
      }
    }
  })

  useEffect(() => {
    getUserInfo()
  }, [getUserInfo])

  useEffect(() => {
    if (info.birth.indexOf('_') === -1 && info.birth.split('').length === 10) {
      let date = info.birth.split('.')
      if (
        Math.round(
          new Date(`${date[1]}.${date[0]}.${date[2]}`).getTime() / 1000.0
        ) <= Math.round(new Date().getTime() / 1000.0)
      ) {
        setResultDate(
          new Date(`${date[1]}.${date[0]}.${date[2]}`).toLocaleDateString(
            'en-US',
            { month: 'short', day: 'numeric', year: 'numeric' }
          )
        )
      }
    }
  }, [info.birth])

  if (!isReady) {
    return <Loader />
  } else {
    return (
      <div>
        <div>
          <div className="container">
            <div className={profileModule.profile__group}>
              <label
                htmlFor="calcCheck"
                className={profileModule.profile__labelCheck}
              >
                <div className={profileModule.profile__title}>
                  Расчет калорий
                </div>
                <div className={profileModule.profile__subtitle}>
                  Включить персональный расчет калорий
                </div>
              </label>
              <input
                type="checkbox"
                id="calcCheck"
                className={profileModule.profile__inputCheck}
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
            </div>

            <div className={profileModule.profile__group}>
              <div className={profileModule.profile__title}>Дата рождения</div>
              {resultDate === undefined ? (
                <InputMask
                  mask="99.99.9999"
                  maskPlaceholder=""
                  onChange={infoHandler}
                  id="birth"
                  name="birth"
                  className={profileModule.profile__input}
                />
              ) : (
                <span
                  className={profileModule.profile__input}
                  onClick={() => {
                    info.birth = ''
                    setResultDate()
                    setTimeout(() => {
                      document.querySelector('#birth').focus()
                    }, 0)
                  }}
                >
                  {resultDate}
                </span>
              )}
            </div>

            <div className={profileModule.profile__group}>
              <div className={profileModule.profile__title}>Рост</div>
              <div>
                <InputMask
                  mask="999"
                  maskPlaceholder=""
                  placeholder={userInfo.info.height}
                  id="height"
                  onChange={infoHandler}
                  name="height"
                  className={profileModule.profile__input}
                />
                <label htmlFor="height" className={profileModule.label__span}>
                  &nbsp;cm
                </label>
              </div>
            </div>
            <div className={profileModule.profile__group}>
              <div className={profileModule.profile__title}>Вес</div>
              <div>
                <InputMask
                  mask="999"
                  maskPlaceholder=""
                  placeholder={userInfo.info.weight}
                  id="weight"
                  onChange={infoHandler}
                  name="weight"
                  className={profileModule.profile__input}
                />
                <label htmlFor="weight" className={profileModule.label__span}>
                  &nbsp;kg
                </label>
              </div>
            </div>

            <div className={profileModule.profile__group}>
              <div className={profileModule.profile__title}>Пол</div>
              <div className={profileModule.gender__wrapper}>
                <div
                  className={`${profileModule.gender__item} ${
                    genderIsMale && profileModule.active
                  }`}
                  onClick={() => setGenderIsMale(true)}
                >
                  Муж.
                </div>
                <div
                  className={`${profileModule.gender__item} ${
                    !genderIsMale && profileModule.active
                  }`}
                  onClick={() => setGenderIsMale(false)}
                >
                  Жен.
                </div>
              </div>
            </div>

            <div className={authModule.absolute} style={{ bottom: '90px' }}>
              <div className="container">
                <div className={errorModule.error__text}>{validError}</div>
                <div
                  className={authModule.auth__btn}
                  onClick={() => {
                    validInfo()
                  }}
                >
                  Сохранить
                </div>
              </div>
            </div>

            <div
              className={`${profileModule.activity} ${
                isChecked && profileModule.active
              }`}
            >
              <div
                className={`${authModule.auth__title} ${authModule.mb40}`}
                style={{ textAlign: 'left', lineHeight: '1' }}
              >
                Выберите вашу цель
              </div>
              {activities.map((item, index) => {
                return (
                  <ActivityCard
                    key={index}
                    item={item}
                    active={userInfo.activity.name}
                  />
                )
              })}
              <div style={{ height: '160px' }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
