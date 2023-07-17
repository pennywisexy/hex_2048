import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router'

import { AppRoutes } from '../../router'
import styles from './styles.module.css'
import { Outlet, useSearchParams } from 'react-router-dom'
import { HomeComponent } from '@view/screens/home/component'


const HomeContainer = () => {
  const [params] = useSearchParams()
  const hostName = params.get('hostname')
  const radius = params.get('radius')
  const portName = params.get('port')

  const LEVELS = [2, 3, 4, 5, 6]
  const MIN_RADIUS = 2
  const [level, setLevel] = useState(MIN_RADIUS)
  const [port, setPort] = useState(80)
  const [host, setHost] = useState('hex2048-lambda.octa.wtf')
  const navigate = useNavigate()

  const searchParams = new URLSearchParams({ hostname: host, port: port.toString(), radius: level.toString() })

  const onStartGame = () => {
    navigate({
      pathname: AppRoutes.game,
      search: searchParams.toString()
    })
  }
  const onHostChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHost(event.target.value)
  }
  const onPortChange = (event: ChangeEvent<HTMLInputElement>) => setPort(+event.target.value)

  if (hostName || portName || radius) {
    return <Outlet />
  }

  return (
    <HomeComponent
      host={ host }
      port={ port }
      level={ level }
      levels={ LEVELS }
      onPortChange={ onPortChange }
      onHostChange={ onHostChange }
      onChooseLevel={ setLevel }
      onStartGame={ onStartGame }
    />
  )
}

export { HomeContainer as Home }
