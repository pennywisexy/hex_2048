import { Grid, ICell } from '../index'


describe('hasMovesLeft', () => {
  it('should return false if there are no moves left', () => {
    const grid: ICell[] = [
      { 'x': -1, 'y': 1, 'z': 0, 'value': 16 },
      { 'x': 0, 'y': 0, 'z': 0, 'value': 32 },
      { 'x': 1, 'y': -1, 'z': 0, 'value': 8 },
      { 'x': -1, 'y': 0, 'z': 1, 'value': 8 },
      { 'x': 0, 'y': -1, 'z': 1, 'value': 4 },
      { 'x': 0, 'y': 1, 'z': -1, 'value': 2 },
      { 'x': 1, 'y': 0, 'z': -1, 'value': 16 }
    ]

    const result = Grid.hasMovesLeft(grid)

    expect(result).toBe(false)
  })

  it('should return false if the grid is empty', () => {
    const grid: ICell[] = []

    const result = Grid.hasMovesLeft(grid)

    expect(result).toBe(false)
  })
})
