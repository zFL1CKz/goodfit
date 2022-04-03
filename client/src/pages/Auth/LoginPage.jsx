import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TopCircle } from '../../components/circles/topCircle'
import authModule from '../../modules/Auth.module.css'

export const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <TopCircle text='Авторизация' />
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
          <div className={authModule.authBottom}>
            <Link to='/register' className={authModule.auth__text}>
              Еще нет аккаунта?
            </Link>
            <button className={authModule.auth__btn}>Вход</button>
          </div>
        </div>
      </div>
    </div>
  )
}
