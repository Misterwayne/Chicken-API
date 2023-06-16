import React from "react"
import { updateChicken } from "../API"

type Props = ChickenProps & {
  updateChicken: (chicken: IChicken) => void
  deleteChicken: (_id: string) => void
}

const Chicken: React.FC<Props> = ({ chicken, updateChicken, deleteChicken }) => {
  const checkChicken: string = `line-through`
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkChicken}>{chicken.name}</h1>
        <span className={checkChicken}>{chicken.weight}</span>
      </div>
      <div className="Card--button">
        <button
          onClick={() =>updateChicken(chicken)}
          className="Card--button__done"
        >
            Its running time !
        </button>
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