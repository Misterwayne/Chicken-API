import React, { useState } from "react"
import  UpdateChicken  from "./UpdateChicken"
import RunningChicken from "../img/running.gif"
import StandingChicken from "../img/standing.gif"

type Props = ChickenProps & {
  updateChicken: (e: React.FormEvent, formData: IChicken) => void
  deleteChicken: (_id: string) => void
  chickenRun: (_id: string) => void
}

const Chicken: React.FC<Props> = ({ chicken, updateChicken, deleteChicken, chickenRun }) => {
  const [upChicken, setUpchicken] = useState(false);
  return (
    <div className="Card">
      <div className="Card--text">
        <h1>{chicken.name}</h1>
        <span>weight : {chicken.weight}</span>
        <p>steps : {chicken.steps}</p>
        <p>Birthday : {chicken.birthday?.slice(0,10)}</p>
        {
          chicken.isRunning ?
          <img src={RunningChicken} alt="loading..."/>
          :
          <img src={StandingChicken} alt="loading..."/>
        }
      </div>
      <div className="Card--button">
        <button
          onClick={() => chickenRun(chicken._id)}
          className="Card--button__done"
        >
            Its running time !
        </button>
        <button
          onClick={() => setUpchicken(!upChicken)}
          className="Card--button__done"
        >
            Update
        </button>
        {upChicken ?
        <UpdateChicken updateChicken={updateChicken} _id={chicken._id}/>
        :
        <p></p>
        }
        <button
          onClick={() => deleteChicken(chicken._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Chicken