import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GameWithKeys, Home } from '../screens'
import { AppRoutes } from './consts'


export const Router: FC = () => (
  <BrowserRouter basename={ process.env.BASE_PATH }>
    <Routes>
      <Route path={ AppRoutes.home } element={ <Home /> }>
        <Route path={ AppRoutes.game } element={ <GameWithKeys /> } />
      </Route>
    </Routes>
  </BrowserRouter>
)
