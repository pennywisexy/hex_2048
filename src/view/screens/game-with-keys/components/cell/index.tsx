import React, { CSSProperties, FC, useCallback, useState } from 'react'

import { ICell } from '../game-field/components'
import { CoordinatesToPosition } from './components'
import styles from './styles.module.css'


export interface ICellProps {
  value: number
  x: number
  y: number
  z: number
  zIndex: number
  radius: number
  cellProps: ICell
}

export const Cell: FC<ICellProps> = React.memo(({
    cellProps,
    value,
    x,
    y,
    z,
    zIndex,
    radius,
  }) => {
    const BASE_SIZE = 300 / radius
    const innerSize = BASE_SIZE - 6
    const HEIGHT_FACTOR = 1.1547
    const [position, setPosition] = useState({ top: '0px', left: '0px', prevTop: '0px', prevLeft: '0px' })

    const generateColors = (value: number) => {
      let backgroundColor
      let color

      switch (value) {
        case 0:
          color = '#000'
          backgroundColor = '#fff'
          break
        case 2:
          color = '#000'
          backgroundColor = '#eee4da'
          break
        case 4:
          color = '#000'
          backgroundColor = '#ede0c8'
          break
        case 8:
          color = '#fff'
          backgroundColor = '#f2b179'
          break
        case 16:
          color = '#fff'
          backgroundColor = '#f59563'
          break
        case 32:
          color = '#fff'
          backgroundColor = '#f67c5f'
          break
        case 64:
          color = '#fff'
          backgroundColor = '#f65e3b'
          break
        default:
          color = '#fff'
          backgroundColor = `rgba(237,194,46,${ 0.95 + 1 / (value) })`
      }

      return { backgroundColor, color }
    }

    const { color, backgroundColor } = generateColors(value)
    const movingCondition = cellProps.prevCell && (
        cellProps.x !== cellProps.prevCell?.x ||
        cellProps.y !== cellProps.prevCell?.y ||
        cellProps.z !== cellProps.prevCell?.z
      )


    const styleVariables = {
      '--top': position.top,
      '--left': position.left,
      '--prev-top': movingCondition ? position.prevTop : position.top,
      '--prev-left': movingCondition ? position.prevLeft : position.left,
      '--animation-time': movingCondition ? '.1s' : 0,
      '--size': `${ BASE_SIZE }px`,
      '--height-factor': HEIGHT_FACTOR,
      '--inner-size': `${ innerSize }px`,
      '--background-color': backgroundColor,
      '--color': color,
      '--z-index': zIndex,
    } as CSSProperties

    const generatePosition = useCallback((top: number, left: number, prevTop: number, prevLeft: number) => setPosition({
      top: `${ top }px`,
      left: `${ left }px`,
      prevTop: `${ prevTop }px`,
      prevLeft: `${ prevLeft }px`
    }), [])

    return (
      <CoordinatesToPosition
        x={ x }
        y={ y }
        prevCell={ cellProps.prevCell }
        size={ BASE_SIZE }
        heightFactor={ HEIGHT_FACTOR }
        generatePosition={ generatePosition }
      >
        <div
          style={ styleVariables }
          className={ styles.hexagon }
          data-x={ x }
          data-y={ y }
          data-z={ z }
          data-value={ value }
        >
          <span className={ styles.content }>{ value ? value : '' }</span>
        </div>
      </CoordinatesToPosition>
    )
  }
)
