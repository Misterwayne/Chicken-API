interface IChicken {
    _id: string
    name: string
    birthday: Date
    weight: number
    steps?: Number
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
  