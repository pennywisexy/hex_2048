import { Grid } from "../index"


describe('generate', () => {
  it('should generate combinations with the specified start and end range', () => {
    const start = -1
    const end = 1
    const expectedResults = [
      { "x": -1, "y": 0, "z": 1, "value": 0 },
      { "x": -1, "y": 1, "z": 0, "value": 0 },
      { "x": 0, "y": -1, "z": 1, "value": 0 },
      { "x": 0, "y": 0, "z": 0, "value": 0 },
      { "x": 0, "y": 1, "z": -1, "value": 0 },
      { "x": 1, "y": -1, "z": 0, "value": 0 },
      { "x": 1, "y": 0, "z": -1, "value": 0 }
    ]

    const results = Grid.generate(start, end)
    expect(results).toEqual(expectedResults)
  })
})
