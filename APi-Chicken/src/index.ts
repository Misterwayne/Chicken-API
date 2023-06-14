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

// mangodb connection


/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(chickenRouter);

const uri: string = "mongodb+srv://baidyfall319:THhNswwQ08EYY5C4@clusterwane.huudpg8.mongodb.net/?retryWrites=true&w=majority"
const options = { useNewUrlParser: true, useUnifiedTopology: true }

/**
 * Server Activation
 */

mongoose
  .connect(uri, options)
  .then(() => 
    app.listen(7000, () =>
    console.log(`server is listening on port ${PORT} and connected to Database`)
     )
    ).catch(error => {
        throw error;
    })