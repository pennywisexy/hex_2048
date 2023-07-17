import React, { FC } from 'react'

import { ICellProps } from '../cell'
import { ICell } from './components'
import styles from './styles.module.css'


interface IGameFieldComponentProps {
  Cell: FC<ICellProps>
  isPlaying: boolean,
  gridWithValues: ICell[],
  grid: ICell[],
  radius: string | number
}

export const GameFieldComponent: FC<IGameFieldComponentProps> = ({
  Cell,
  isPlaying,
  gridWithValues,
  grid,
  radius,
}) => (
  <>
    <div data-status={ isPlaying ? 'playing' : 'game-over' } className={ styles.gameStatus }>
      Game Status: <span>{ isPlaying ? 'playing' : 'game-over' }</span>
    </div>

    <div
      className={ styles.container }
    >
      { gridWithValues.map(element => {
        const { prevCell, ...rest } = element

        return (
          <Cell
            key={ JSON.stringify(rest) }
            cellProps={ element }
            x={ element.x }
            y={ element.y }
            z={ element.z }
            value={ element.value }
            zIndex={ 2 }
            radius={ +radius }
          />
        )
      }) }

      { [...grid].map(element => (
        <Cell
          key={ JSON.stringify(element) }
          cellProps={ element }
          x={ element.x }
          y={ element.y }
          z={ element.z }
          value={ element.value }
          zIndex={ 1 }
          radius={ +radius }
        />
      )) }
    </div>
  </>

)
