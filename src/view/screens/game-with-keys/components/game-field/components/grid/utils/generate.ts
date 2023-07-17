export const generate = (start: number, end: number) => {
  const LENGTH = 3
  const results: {x: number, y: number, z: number, value: number}[] = []

  function backtrack(combination: number[], remainingLength: number) {
    if (remainingLength === 0) {
      const sum = combination.reduce((acc, curr) => acc + parseInt(curr.toString()), 0)
      if (sum === 0) {
        results.push({
          x: combination[0],
          y: combination[1],
          z: combination[2],
          value: 0
        })
      }
      return
    }

    for (let i = start; i <= end; i++) {
      const newCombination = combination.concat(i)
      backtrack(newCombination, remainingLength - 1)
    }
  }

  backtrack([], LENGTH)
  return results
}
