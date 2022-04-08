import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import { Loader } from '../../components/loader/Loader'

import './GoalsPage.css'

export const GoalsPage = () => {
  const { token } = useContext(AuthContext)
  const { request, error, clearError } = useHttp()
  const [goals, setGoals] = useState([])
  const [isReady, setIsReady] = useState(false)

  const [goalsInput, setGoalsInput] = useState('')

  const getGoals = useCallback(async () => {
    try {
      await request('/api/goals/get', 'GET', null, {
        Authorization: `Bearer ${token}`,
      }).then((res) => {
        setGoals(res)
        // console.log(goals)
      })
    } catch (error) {
      console.log(error)
    }
    setIsReady(true)
  }, [request, goals.length])

  useEffect(() => {
    getGoals()
  }, [token, getGoals])

  const addNewGoal = useCallback(async () => {
    try {
      await request(
        '/api/goals/add',
        'POST',
        { goalsInput },
        {
          Authorization: `Bearer ${token}`,
        }
      ).then(() => {
        setGoalsInput('')
        getGoals()
      })
    } catch (error) {
      console.log(error)
    }
  }, [token, request, goalsInput])

  const deleteGoal = useCallback(
    async (id) => {
      try {
        await request(`/api/goals/delete/${id}`, 'DELETE', null, {
          Authorization: `Bearer ${token}`,
        }).then(() => {
          getGoals()
        })
      } catch (error) {
        console.log(error)
      }
    },
    [token, request]
  )

  const completeGoal = useCallback(
    async (id) => {
      try {
        await request(`/api/goals/completed/${id}`, 'PUT', null, {
          Authorization: `Bearer ${token}`,
        }).then(() => {
          getGoals()
        })
      } catch (error) {
        console.log(error)
      }
    },
    [token, request]
  )

  if (!isReady) return <Loader />
  else
    return (
      <div className='goals'>
        <div
          className='goals__item goals__new'
          onClick={() => {
            document.querySelector('#goals--input').focus()
          }}>
          <input
            type='text'
            id='goals--input'
            placeholder='Новая задача'
            value={goalsInput}
            onChange={(e) => setGoalsInput(e.target.value)}
          />

          <div
            className='goals__img goals--add'
            onClick={() => {
              if (goalsInput === '')
                document.querySelector('#goals--input').focus()
              else addNewGoal()
            }}></div>
        </div>

        {goals.map((item, index) => {
          return (
            <div
              className={
                item.completed ? 'goals__item completed' : 'goals__item'
              }
              key={index}>
              <div className='goals__text'>{item.text}</div>
              {!item.completed ? (
                <div className='goals__group'>
                  <div
                    className='goals__img goals--check'
                    onClick={() => completeGoal(item._id)}></div>

                  <div
                    className='goals__img goals--cross'
                    onClick={() => deleteGoal(item._id)}></div>
                </div>
              ) : (
                <div
                  className='goals__img goals--cross'
                  onClick={() => deleteGoal(item._id)}></div>
              )}
            </div>
          )
        })}
        <div style={{ height: '90px' }}></div>
      </div>
    )
}
