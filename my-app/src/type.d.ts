interface IChicken {
    _id: string
    name: string
    birthday?: string
    weight: number
    steps?: number
    isRunning?: Boolean
  }
  
  interface ChickenProps {
    chicken: IChicken
  }
  
  type ApiDataType = {
    message: string
    status: string
    chickens: IChicken[]
    chicken?: IChicken
  }
  