import express from "express";
import { addChicken, updateChicken, deleteChicken, getChickens, chickenRun} from "../controllers/index"

const router = express.Router();

router.get('/chicken', getChickens);

router.post('/chicken', addChicken);

router.put('/chicken/:id', updateChicken);

router.delete('/chicken/:id', deleteChicken);

router.patch('/chicken/run/:id', chickenRun);

export { router as chickenRouter }