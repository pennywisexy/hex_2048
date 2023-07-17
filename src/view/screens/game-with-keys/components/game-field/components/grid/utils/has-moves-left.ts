import { ICell } from '../interfaces'


export const hasMovesLeft = (grid: ICell[] | []) => {
  const cachedNeighbors = new Map<ICell, (ICell | null)[]>()

  const getNeighbors = (cell: ICell) => {
    if (cachedNeighbors.has(cell)) {
      return cachedNeighbors.get(cell)!
    }

    const getCell = (x: number, y: number, z: number) => grid.find(cell => cell.x === x && cell.y === y && cell.z === z) || null

    const { x, y, z } = cell
    const neighbors = [
      getCell(x - 1, y, z + 1),
      getCell(x - 1, y + 1, z),
      getCell(x, y - 1, z + 1),
      getCell(x, y + 1, z - 1),
      getCell(x + 1, y - 1, z),
      getCell(x + 1, y, z - 1)
    ]

    cachedNeighbors.set(cell, neighbors)
    return neighbors
  }

  for (const cell of grid) {
    const neighbors = getNeighbors(cell)

    if (cell.value === 0 || neighbors.some(neighbor => neighbor && neighbor.value === cell.value)) {
      return true
    }
  }

  return false
}




