import React, { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router'

import { AppRoutes } from '@view/router'
import { ICellProps } from '../cell'
import { Grid, ICell } from './components'
import { GameFieldComponent } from './component'


interface IGameFieldProps {
  Cell: FC<ICellProps>
}

enum KeyCodes {
  Q = 'KeyQ',
  W = 'KeyW',
  E = 'KeyE',
  A = 'KeyA',
  S = 'KeyS',
  D = 'KeyD',
}

const GameFieldContainer: FC<IGameFieldProps> = ({ Cell }) => {
  const DEFAULT_RADIUS = 2

  const [params] = useSearchParams()
  const host = params.get('hostname')
  const radius = params.get('radius') || DEFAULT_RADIUS
  const port = params.get('port')
  const [gridWithValues, setGridWithValues] = useState<ICell[] | []>([])
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const grid = Grid.generate((-Number(radius) || DEFAULT_RADIUS) + 1, (Number(radius) || DEFAULT_RADIUS) - 1)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    (!radius || radius && +radius === 1 || !host) && navigate(AppRoutes.home)
  }, [radius])

  useEffect(() => {
    setIsLoading(true)

    Grid.update([], grid, host, port, Number(radius)).then(data => {
      setGridWithValues(data)
      setIsLoading(false)
      setIsPlaying(Grid.hasMovesLeft(data))
    })
  }, [])

  useEffect(() => {
    const handleMoveAndMultiply = ({ code }: KeyboardEvent) => {
      if (isLoading) {
        return
      }

      const newGrid = [...gridWithValues]
      let usedAxis: keyof typeof grid[0] = 'x'

      switch (code) {
        case KeyCodes.W:
          usedAxis = 'x'
          newGrid.sort((a, b) => -a.y + b.y)
          break
        case KeyCodes.S:
          usedAxis = 'x'
          newGrid.sort((a, b) => a.y - b.y)
          break
        case KeyCodes.Q:
          usedAxis = 'z'
          newGrid.sort((a, b) => a.x - b.x)
          break
        case KeyCodes.D:
          usedAxis = 'z'
          newGrid.sort((a, b) => -a.x + b.x)
          break
        case KeyCodes.A:
          usedAxis = 'y'
          newGrid.sort((a, b) => -a.z + b.z)
          break
        case KeyCodes.E:
          usedAxis = 'y'
          newGrid.sort((a, b) => a.z - b.z)
          break
        default:
          return
      }

      const result = Grid.exchangeValues(newGrid, usedAxis)

      if (Grid.compareArrays(newGrid, result)) {
        return
      }

      setGridWithValues(result)
      setIsLoading(true)

      Grid.update(result.filter(element => element.value), result, host, port, Number(radius)).then(data => {
        setGridWithValues(data)
        setIsLoading(false)
        setIsPlaying(Grid.hasMovesLeft(data))
      })
    }

    document.addEventListener('keydown', handleMoveAndMultiply)

    return () => {
      document.removeEventListener('keydown', handleMoveAndMultiply)
    }
  }, [isLoading])


  if (!host || !port || !radius) {
    navigate(AppRoutes.home)
    return <></>
  }

  return (
    <GameFieldComponent
      Cell={ Cell }
      isPlaying={ isPlaying }
      gridWithValues={ gridWithValues.filter(element => element.value) }
      grid={ grid }
      radius={ radius }
    />
  )
}

export { GameFieldContainer as GameField }
