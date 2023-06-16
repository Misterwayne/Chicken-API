import React, { useState } from 'react'

type Props = { 
  saveChicken: (e: React.FormEvent, formData: IChicken | any) => void 
}

const AddChicken: React.FC<Props> = ({ saveChicken }) => {
  const [formData, setFormData] = useState<IChicken | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveChicken(e, formData)}>
      <div>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='birthday'>Birthday</label>
          <input onChange={handleForm} type='date' id='birthday' />
        </div>
        <div>
          <label htmlFor='weight'>weight</label>
          <input onChange={handleForm} type='number' id='birthday' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add Chicken</button>
    </form>
  )
}

export default AddChicken