import React, { FC, ReactNode, useEffect } from 'react'
import { ICell } from '@view/screens/game-with-keys/components/game-field/components'


interface ICoordinatesToPositionProps {
  x: number
  y: number
  size: number
  heightFactor: number
  generatePosition: (top: number, left: number, prevTop: number, prevLeft: number) => void
  children: ReactNode
  prevCell?: ICell
}

export const CoordinatesToPosition: FC<ICoordinatesToPositionProps> = ({
  x,
  y,
  size,
  heightFactor,
  generatePosition,
  prevCell,
  children
}) => {
  const hexagonSize = size / 2
  const angle = Math.PI * heightFactor * 1.59
  const xCoordinate = hexagonSize * Math.sqrt(3) * (x + (y / 2))
  const yCoordinate = hexagonSize * 3 / 2 * y

  const left = xCoordinate * Math.cos(angle) - yCoordinate * Math.sin(angle) * -1 - x * 2
  const top = xCoordinate * Math.sin(angle) + yCoordinate * Math.cos(angle) * -1 + y * 2

  let prevLeft: number
  let prevTop: number

  if (prevCell) {
    const prevXCoordinate = hexagonSize * Math.sqrt(3) * (prevCell.x + (prevCell.y / 2))
    const prevYCoordinate = hexagonSize * 3 / 2 * prevCell.y

    prevLeft = prevXCoordinate * Math.cos(angle) - prevYCoordinate * Math.sin(angle) * -1 - prevCell.x * 2
    prevTop = prevXCoordinate * Math.sin(angle) + prevYCoordinate * Math.cos(angle) * -1 + prevCell.y * 2
  }

  useEffect(() => {
    generatePosition(top, left, prevTop || 0, prevLeft || 0)
  }, [])

  return <>{ children }</>
}
