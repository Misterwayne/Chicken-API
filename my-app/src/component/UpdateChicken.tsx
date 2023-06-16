import React, { useState } from 'react'

type Props = { 
  updateChicken: (e: React.FormEvent, formData: IChicken | any) => void
  _id : string
}

const UpdateChicken: React.FC<Props> = ({ updateChicken, _id }) => {
  const [formData, setFormData] = useState<IChicken | {}>({_id : _id, isRunning : false})


  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const handleCheckBox = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [e.currentTarget.id]: e.currentTarget.value === 'on' ? true : false
    })
  }

  return (
    <form className='Form' onSubmit={(e) => updateChicken(e, formData)}>
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
        <div>
          <label htmlFor='isRunning'>isRunning</label>
          <input onChange={handleCheckBox} type="checkbox" id='isRunning' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Update Chicken</button>
    </form>
  )
}

export default UpdateChicken