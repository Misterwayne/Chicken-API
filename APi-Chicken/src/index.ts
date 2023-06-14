/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();


/**
 * App Variables
 */
const app = express();

const PORT = process.env;

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */
app.listen(3000, () => {
    console.log(`server is listening on port ${PORT}`)
})