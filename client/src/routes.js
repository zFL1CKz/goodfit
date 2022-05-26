import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { RegisterPage } from './pages/Auth/RegisterPage.jsx'
import { LoginPage } from './pages/Auth/LoginPage.jsx'
import { MenuPage } from './pages/MenuPage/MenuPage.jsx'

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path='/menu' exact>
          <MenuPage />
        </Route>
        <Redirect to='/menu' />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/register' exact>
        <RegisterPage />
      </Route>
      <Route path='/login' exact>
        <LoginPage />
      </Route>
      <Redirect to='/login' />
    </Switch>
  )
}
