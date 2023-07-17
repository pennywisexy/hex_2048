import { HexagonController } from '@controllers'
import { ICell } from '../interfaces'


export const update = async (request: ICell[] | [], currentGrid: ICell[] | [], host: string | null, port: string | null, radius: number) => {
  const hexagonController = new HexagonController()

  const data: ICell[] = await hexagonController.getData(request, host, port, radius)

  const uniqueArray: ICell[] = Object.values(
    [...currentGrid, ...data].reduce((acc: Record<string, ICell>, obj) => {
      if ('prevCell' in obj) {
        delete obj.prevCell
      }

      const { value, ...rest } = obj

      acc[JSON.stringify(rest)] = obj

      return acc

    }, {})
  )

  return uniqueArray
}
