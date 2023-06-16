import { IChickens } from "./../types/chicken"
import { model, Schema } from "mongoose"

const chickenSchema: Schema = new Schema(
  {
    name: {
        type: String,
        required: true,
    },

    birthday: {
        type: Date,
    },

    weight: {
        type: Number,
        required: true,
    },
    steps: {
        type: Number,
        default: 0,
    },
    isRunning: {
        type: Boolean,
        default: false,
    },
    farmyard: { 
        type: Schema.Types.ObjectId,
        ref: 'Farmyard' 
    },
  },
)

export default model<IChickens>("Chicken", chickenSchema)