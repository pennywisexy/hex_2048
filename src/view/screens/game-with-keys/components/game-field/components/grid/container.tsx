import React, { FC, ReactNode } from 'react'

import { compareArrays, exchangeValues, generate, hasMovesLeft, update } from './utils'


interface IGridProps {
  children: ReactNode
}
interface IGrid extends FC<IGridProps> {
  compareArrays: typeof compareArrays
  generate: typeof generate
  exchangeValues: typeof exchangeValues
  hasMovesLeft: typeof hasMovesLeft
  update: typeof update
}

export const Grid: IGrid = () => <></>

Grid.compareArrays = compareArrays
Grid.generate = generate
Grid.exchangeValues = exchangeValues
Grid.hasMovesLeft = hasMovesLeft
Grid.update = update
