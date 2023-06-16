import { Document, Schema } from "mongoose";

export interface IChickens extends Document {
    name: String;
    birthday: Date;
    weight: Number;
    steps: Number;
    isRunning: Boolean;
    farmyard: Schema.Types.ObjectId;
}
