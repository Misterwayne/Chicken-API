import React, { useState } from 'react'

type Props = { 
  saveChicken: (e: React.FormEvent, formData: IChicken | any) => void 
}

const AddChicken: React.FC<Props> = ({ saveChicken }) => {
  const [formData, setFormData] = useState<IChicken | {}>({isRunning: false})

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form'  onSubmit={(e) => saveChicken(e, formData)}>
      <div className='Form_update'>
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
          <input onChange={handleForm} type='number' id='weight' />
        </div>
        <div>
          <label htmlFor='steps'>steps</label>
          <input onChange={handleForm} type='number' id='steps' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Add Chicken</button>
    </form>
  )
}

export default AddChicken