import { Grid, ICell } from '../index'


describe('exchangeValues', () => {
  test('should exchange values in the grid', () => {
    const newGrid: ICell[] = [
      { 'x': -1, 'y': 1, 'z': 0, 'value': 0 },
      { 'x': 0, 'y': 1, 'z': -1, 'value': 2 },
      { 'x': -1, 'y': 0, 'z': 1, 'value': 2 },
      { 'x': 0, 'y': 0, 'z': 0, 'value': 2 },
      { 'x': 1, 'y': 0, 'z': -1, 'value': 0 },
      { 'x': 0, 'y': -1, 'z': 1, 'value': 0 },
      { 'x': 1, 'y': -1, 'z': 0, 'value': 0 }
    ]

    const usedAxis: keyof ICell = 'x'

    const exchangedGrid = Grid.exchangeValues(newGrid, usedAxis)

    expect(exchangedGrid).toEqual([
      { "x": 0, "y": 1, "z": -1, "value": 4, "prevCell": { "x": 0, "y": 0, "z": 0, "value": 2 } },
      { "x": 0, "y": 0, "z": 0, "value": 0 },
      { "x": 0, "y": -1, "z": 1, "value": 0 },
      { "x": 1, "y": 0, "z": -1, "value": 0, "prevCell": { "x": 1, "y": 0, "z": -1, "value": 0 } },
      { "x": 1, "y": -1, "z": 0, "value": 0 },
      { "x": -1, "y": 1, "z": 0, "value": 2, "prevCell": { "x": -1, "y": 0, "z": 1, "value": 2 } },
      { "x": -1, "y": 0, "z": 1, "value": 0 }
    ])
  })
})

export {}
