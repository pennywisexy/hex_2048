import { ICell } from '../interfaces'


function shiftCells(arr: ICell[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].value === 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].value !== 0) {
          arr[i].value = arr[j].value

          if (arr[j].prevCell) {
            arr[i].prevCell = Object.assign({}, arr[j].prevCell)
            delete arr[j].prevCell
          }

          arr[j].value = 0
          break
        }
      }
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].value !== 0 && arr[i].value === arr[i + 1].value) {
      arr[i].value += arr[i + 1].value

      if (arr[i + 1].prevCell) {
        arr[i].prevCell = Object.assign({}, arr[i + 1].prevCell)
        delete arr[i + 1].prevCell
      }
      arr[i + 1].value = 0
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].value === 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].value !== 0) {
          arr[i].value = arr[j].value
          if (arr[j].prevCell) {
            arr[i].prevCell = Object.assign({}, arr[j].prevCell)
            delete arr[j].prevCell
          }
          arr[j].value = 0
          break
        }

        delete arr[j].prevCell
      }
    }
  }

  return arr
}

export const exchangeValues = (newGrid: ICell[], usedAxis: keyof ICell) => {
  const result: Record<string, ICell[]> = {}
  newGrid.forEach(grid => {
    delete grid.prevCell
    const key = String(grid[usedAxis])

    if (result[key] && result[key].length) {
      result[key].push({ ...grid, prevCell: { ...grid } })
    } else {
      result[key] = [{ ...grid, prevCell: { ...grid } }]
    }
  })

  const final: ICell[] = []

  Object.keys(result).forEach(key => {
    final.push(...shiftCells(result[key]))
  })

  return Object.values(final)
}
