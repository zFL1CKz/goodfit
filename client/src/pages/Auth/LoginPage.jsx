import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TopCircle } from '../../components/circles/topCircle'
import authModule from '../../modules/Auth.module.css'
import errorModule from '../../modules/Error.module.css'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'

export const LoginPage = () => {
  const auth = useContext(AuthContext)
  const { loading, error, request, clearError } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [validError, setValidError] = useState('')

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setValidError(error)
  }, [error, clearError])

  async function loginHandler() {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })
      auth.login(data.token, data.userId)
    } catch (error) {}
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
            <button className={authModule.auth__btn} onClick={loginHandler}>
              Вход
            </button>
            <div className={errorModule.error__text}>{validError}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
