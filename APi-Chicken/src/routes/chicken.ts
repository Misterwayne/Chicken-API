import express from "express";
import { addChicken, updateChicken, deleteChicken, getChickens} from "../controllers/index"

const router = express.Router();

router.get('/chicken', getChickens);

router.post('/chicken', addChicken);

router.put("/chicken", updateChicken);

router.delete("/chicken", deleteChicken);

export { router as chickenRouter }