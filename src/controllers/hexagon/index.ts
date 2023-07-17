import { HexagonAPI, IHexagonDataRequest } from '@repository'
import { AppRoutes } from '@view/router'


export class HexagonController {
  private api: HexagonAPI

  constructor() {
    this.api = new HexagonAPI()
  }

  getData = async (grid: IHexagonDataRequest[] | [], host: string | null, port: string | null, radius: number) => {
    try {
      return await this.api.getData(grid, host, port, radius)
    } catch (e) {
      window.location.replace(AppRoutes.home)

      throw {
        description: 'HexagonController getData Error',
        error: e
      }
    }
  }
}
