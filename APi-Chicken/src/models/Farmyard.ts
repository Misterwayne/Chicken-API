import { model, Schema } from "mongoose"
import {IFarmyard}  from "../types/farmYard"


const farmyardSchema = new Schema(
    {
        name: { 
            type: String,
            required: true 
        },
        chickens: [{ 
            type: Schema.Types.ObjectId,
            ref: 'Chicken' 
        }]
    },
);

export default model<IFarmyard>("FarmYard", farmyardSchema)