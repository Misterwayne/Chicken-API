/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express, {Express} from "express";
import cors from "cors";
import helmet from "helmet";
import { chickenRouter } from "./routes/chicken";
import mongoose from "mongoose"

dotenv.config();


/**
 * App Variables
 */
const app: Express = express();
const PORT = process.env.PORT;
const PASSWORD = process.env.MONGO_PASSWORD;
const USER = process.env.MONGO_USER;
const uri: string = `mongodb+srv://${USER}:${PASSWORD}@clusterwane.huudpg8.mongodb.net/?retryWrites=true&w=majority`

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(chickenRouter);

/**
 * Server Activation
 */

mongoose
  .connect(uri)
  .then(() => 
    app.listen(7000, () =>
    console.log(`server is listening on port ${PORT} and connected to Database`)
     )
    ).catch(error => {
        throw error;
    })