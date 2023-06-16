import { Document , Schema } from "mongoose";

export interface IFarmyard extends Document {
    name: string;
    chickens: Schema.Types.ObjectId[];
}