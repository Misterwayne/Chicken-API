import { Response, Request } from "express"
import { IChickens } from "../types/chicken"
import Chicken from "../models/chicken"

const getChickens = async (req: Request, res: Response): Promise<void> => {
    try {
        const chickens: IChickens[] = await Chicken.find();
        res.status(200).json({ chickens })
    } catch (error) {
        throw error
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
      const allChickens: IChickens[] = await Chicken.find()
  
      res
        .status(201)
        .json({ message: "chicken added", chicken: newChicken, chickens: allChickens })
    } catch (error) {
      throw error
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
        body
      )
      const allChickens: IChickens[] = await Chicken.find()
      res.status(200).json({
        message: "Todo updated",
        chicken: updateChicken,
        chickens: allChickens,
      })
    } catch (error) {
      throw error
    }
}

const deleteChicken = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedChicken: IChickens | null = await Chicken.findByIdAndRemove(
        req.params.id
      )
      const allChickens: IChickens[] = await Chicken.find()
      res.status(200).json({
        message: "Chicken deleted",
        todo: deletedChicken,
        todos: allChickens,
      })
    } catch (error) {
      throw error
    }
}
  
export { getChickens, addChicken, updateChicken, deleteChicken }