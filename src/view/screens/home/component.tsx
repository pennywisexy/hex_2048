import React, { ChangeEvent, FC } from 'react'

import styles from './styles.module.css'


interface IHomeComponentProps {
  port: number
  host: string
  onPortChange: (event: ChangeEvent<HTMLInputElement>) => void
  onHostChange: (event: ChangeEvent<HTMLInputElement>) => void
  levels: number[]
  level: number
  onChooseLevel: React.Dispatch<React.SetStateAction<number>>
  onStartGame: () => void
}

export const HomeComponent: FC<IHomeComponentProps> = ({
  port,
  host,
  onPortChange,
  onHostChange,
  levels,
  level,
  onChooseLevel,
  onStartGame
}) => (
  <div className={ styles.container }>
    <div className={ styles.textControlsGroup }>
      <input
        value={ port }
        onChange={ onPortChange }
        type="text"
        className={ styles.formField }
        placeholder="Port"
        name="port"
        id="port"
      />
      <label
        htmlFor="port"
        className={ styles.formLabel }
      >
        Port
      </label>
    </div>

    <div className={ styles.textControlsGroup }>
      <input
        value={ host }
        onChange={ onHostChange }
        type="text"
        className={ styles.formField }
        placeholder="Host"
        name="host"
        id="host"
      />
      <label
        htmlFor="host"
        className={ styles.formLabel }
      >
        Host
      </label>
    </div>

    <div className={ styles.rangeWrapper }>
      <h2 className={ styles.rangeTitle }>Choose Level</h2>
      <div className={ styles.debtAmountSlider }>
        {
          levels.map(gameLevel => (
            <React.Fragment key={`level${gameLevel}`}>
              <input
                readOnly
                type="radio"
                name="level"
                value={ gameLevel }
                checked={ level === gameLevel }
              />
              <label
                onClick={ onChooseLevel.bind(null, gameLevel) }
                data-level={ gameLevel - 1 }
              />
            </React.Fragment>
          ))
        }
        <div className={ styles.debtAmountPos }></div>
      </div>
    </div>
    <button
      className={ styles.startButton }
      onClick={ onStartGame }
    >
      Start Game
    </button>
  </div>
)

