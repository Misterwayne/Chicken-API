import { Response, Request } from "express"
import { IChickens } from "../types/chicken"
import Chicken from "../models/chicken"

const getChickens = async (req: Request, res: Response): Promise<void> => {
    try {
        const chickens: IChickens[] = await Chicken.find();
        res.status(200).json({ chickens })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      })
    }
}

const addChicken = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as Pick<IChickens, "name" | "birthday" | "weight" | "steps" | "isRunning">
  
      const chicken: IChickens = new Chicken({
        name: body.name,
        birthday: body.birthday,
        weight: body.weight,
        steps: body.steps,
        isRunning: body.isRunning
      })
  
      const newChicken: IChickens = await chicken.save()
  
  
      res
        .status(201)
        .json({ message: "chicken added", chicken: newChicken})
    } catch (error) {
      res.status(500).json({
        message: "chicken addition failed",
      })
    }
}

const updateChicken = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        params: { id },
        body,
      } = req
      const updateChicken: IChickens | null = await Chicken.findByIdAndUpdate(
        { _id: id },
        body,
        {new: true},
      )
      res.status(200).json({
        message: "chicken updated",
        chicken: updateChicken,
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      })
    }
}

const deleteChicken = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedChicken: IChickens | null = await Chicken.findByIdAndRemove(
        req.params.id
      )
      res.status(200).json({
        message: "Chicken deleted",
        chicken: deletedChicken,
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      })
    }
}

const chickenRun = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateChicken: IChickens | null = await Chicken.findByIdAndUpdate(
      { _id: id },
      {$inc: {steps: 1}},
      {new: true},
    )

    res.status(200).json({
      message: `Chicken ${updateChicken?.name} took a step`,
      chicken: updateChicken,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    })
  }
}
  
export { getChickens, addChicken, updateChicken, deleteChicken, chickenRun }