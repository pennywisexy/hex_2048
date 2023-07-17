import { Grid, ICell } from '../index'

describe('compareArrays', () => {
  it('should return true for equal arrays', () => {
    const arr1: ICell[] = [
      { x: 1, y: 2, z: 3, value: 10 },
      { x: 4, y: 5, z: 6, value: 20 },
      { x: 7, y: 8, z: 9, value: 30 },
    ]
    const arr2: ICell[] = [
      { x: 1, y: 2, z: 3, value: 10 },
      { x: 4, y: 5, z: 6, value: 20 },
      { x: 7, y: 8, z: 9, value: 30 },
    ]

    const result = Grid.compareArrays(arr1, arr2)

    expect(result).toBe(true)
  })

  it('should return false for different arrays', () => {
    const arr1: ICell[] = [
      { x: 1, y: 2, z: 3, value: 10 },
      { x: 4, y: 5, z: 6, value: 20 },
      { x: 7, y: 8, z: 9, value: 30 },
    ]
    const arr2: ICell[] = [
      { x: 1, y: 2, z: 3, value: 10 },
      { x: 4, y: 5, z: 6, value: 25 },
      { x: 7, y: 8, z: 9, value: 30 },
    ]

    const result = Grid.compareArrays(arr1, arr2)

    expect(result).toBe(false)
  })
})
