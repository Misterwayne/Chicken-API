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
        type: Boolean,
        required: true,
    },
    steps: {
        type: Number,
        default: 0,
    },
    isRunning: {
        type: Boolean,
        default: false,
    }
  },
)

export default model<IChickens>("Chicken", chickenSchema)