import { Response, Request } from "express"
import { IChickens } from "../types/chicken"
import { IFarmyard } from "../types/farmYard"
import Chicken from "../models/chicken"
import Farmyard from "../models/Farmyard"


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
      const allChickens: IChickens[] = await Chicken.find();
      res.status(201).json({
         message: `${newChicken.name} added`, chicken: newChicken, chickens: allChickens
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Internal Server Error",
      })
    }
}

const updateChicken = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        params: { id },
        body,
      } = req
      console.log(req.body, id)
      const updateChicken: IChickens | null = await Chicken.findByIdAndUpdate(
        { _id: id },
        body,
        {new: true},
      )
      const allChickens: IChickens[] = await Chicken.find();
      if (updateChicken === null){
        res.status(200).json({
          message: "Chicken not found",
        })
      }
      else {
        res.status(200).json({
          message: `${updateChicken?.name} updated`,
          chicken: updateChicken,
          chickens: allChickens,
        })
      }
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
      const allChickens: IChickens[] = await Chicken.find();
      if (deletedChicken === null){
        res.status(200).json({
          message: "Chicken not found",
        })
      }
      else {
        res.status(200).json({
          message: `${deletedChicken?.name} deleted`,
          chicken: deletedChicken,
          chickens: allChickens
        })
      }

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
    const allChickens: IChickens[] = await Chicken.find();
    console.log("the chicken is running")
    res.status(200).json({
      message: `Chicken ${updateChicken?.name} took a step`,
      chicken: updateChicken,
      chickens: allChickens 
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    })
  }
}

const createFarmyard = async (req: Request, res: Response): Promise<void> => {
  const body = req.body as Pick<IChickens, "name">
  const farmyard = new Farmyard({ 
    name: body.name
  });

  const newFarmyard = await farmyard.save();
  const allFarmyard = await Farmyard.find();
  res.status(200).json({
    farmyard : newFarmyard,
    farmyards : allFarmyard,
  })
}

const getFarmYards = async (req: Request, res: Response): Promise<void> => {
  try {
      const farmyards: IFarmyard[] = await Farmyard.find();
      res.status(200).json({ farmyards })
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    })
  }
}

const linkChickenToFarmyard = async (req: Request, res: Response): Promise<void> => {
  const chickenId = req.body.chickenId;
  const farmyardId = req.body.chickenId;
  const chicken = await Chicken.findById(chickenId);
  const farmyard = await Farmyard.findById(farmyardId);

  if (chicken && farmyard) {
    chicken.farmyard = farmyard._id;
    farmyard.chickens.push(chicken?._id);

    await chicken.save();
    await farmyard.save();
    res
  }
}

  
export { getChickens, addChicken, updateChicken, deleteChicken, chickenRun, createFarmyard, getFarmYards, linkChickenToFarmyard }