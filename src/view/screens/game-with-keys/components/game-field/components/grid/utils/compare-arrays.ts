import { ICell } from '../interfaces'

export const compareArrays = (arr1: ICell[] | [], arr2: ICell[] | []) => {
  function compareCoordinates(obj1: ICell, obj2: ICell) {
    return obj1.x - obj2.x || obj1.y - obj2.y || obj1.z - obj2.z
  }

  function compareObjects(obj1: ICell, obj2: ICell) {
    return obj1.x === obj2.x && obj1.y === obj2.y && obj1.z === obj2.z && obj1.value === obj2.value
  }

  const sortedArr1 = [...arr1].sort(compareCoordinates)
  const sortedArr2 = [...arr2].sort(compareCoordinates)

  for (let i = 0; i < sortedArr1.length; i++) {
    if (!compareObjects(sortedArr1[i], sortedArr2[i])) {
      return false
    }
  }

  return true
}
