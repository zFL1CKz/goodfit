import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Loader } from '../../components/loader/Loader'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { TopCircle } from '../../components/circles/topCircle'
import { NavBar } from '../../components/navbar/navbar'

export const ProfilePage = () => {
  const { token } = useContext(AuthContext)
  const { request } = useHttp()
  const [info, setInfo] = useState([])
  const [isReady, setIsReady] = useState(false)

  const getInfo = useCallback(async () => {
    setIsReady(false)
    try {
      await request('/api/getuserinfo', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        setInfo(res)
        // console.log(info)
      })
    } catch (error) {
      console.log(error)
    }
    setIsReady(true)
  }, [token, request, info.length])

  useEffect(() => {
    getInfo()
  }, [getInfo])

  if (!isReady) return <Loader />
  else
    return (
      <div className='container'>
        <h1>ProfilePage</h1>
      </div>
    )
}
