import { IHexagonDataRequest, IHexagonDataResponse } from './interfaces'


const DEFAULT_PORT = '80'
const DEFAULT_HOST = 'hex2048-lambda.octa.wtf'

export class HexagonAPI {
  getData = async (
    grid: IHexagonDataRequest[] | [],
    host: string | null,
    port: string | null,
    radius: number
  ): Promise<IHexagonDataResponse[]> => {
    let requestUrl: string

    const hostName = host || DEFAULT_HOST
    const portName = port || DEFAULT_PORT

    if (host === 'localhost') {
      requestUrl = `//${ hostName }:${ portName }/${ radius }`
    } else {
      requestUrl = `//${ hostName }/${ radius }`
    }

    const response = await fetch(
      requestUrl,
      {
        body: JSON.stringify(grid),
        method: 'POST',
      },
    )

    return response.json()
  }
}

export * from './interfaces'
