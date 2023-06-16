import React, { useEffect, useState } from 'react'
import ChickenItems from './component/ChickensList'
import AddChicken from './component/AddChicken'
import { getChicken, addChicken, updateChicken, deleteChicken, chickenRun } from './API'
import background from "./img/farm-bg.jpg"

const App: React.FC = () => {
  const [chickens, setChickens] = useState<IChicken[]>([])

  useEffect(() => {
    fetchChickens()
  }, [])

  const fetchChickens = (): void => {
    getChicken()
    .then(({ data: { chickens } }: IChicken[] | any) => setChickens(chickens))
    .catch((err: Error) => console.log(err))
  }

  const handleSaveChicken = (e: React.FormEvent, formData: IChicken): void => {
    e.preventDefault()
    addChicken(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Chicken not saved")
        }
        setChickens(data.chickens)
      })
      .catch(err => console.log(err))
  }

  const handleUpdateChicken = (e: React.FormEvent, formData: IChicken): void => {
    updateChicken(formData)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Chicken not updated")
        }
        setChickens(data.chickens)
      })
      .catch(err => console.log(err))
  }
  
  const handleDeleteChicken = (_id: string): void => {
    deleteChicken(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Chicken not deleted")
        }
        setChickens(data.chickens)
      })
      .catch(err => console.log(err))
  }

  const handleChickenRun = (_id: string): void => {
    chickenRun(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Chicken not deleted")
        }
        setChickens(data.chickens)
      })
      .catch(err => console.log(err))
  }
  
  return (
    <div style={{ backgroundImage: `url(${background})`, height: '100%', backgroundRepeat: 'no-repeat',backgroundPosition: 'center',
    backgroundSize: 'cover',}}>
      <main className='App'>
      <h1>My Chickens</h1>
      <AddChicken saveChicken={handleSaveChicken} />
      {chickens.map((chicken: IChicken) => (
        <ChickenItems
        key={chicken._id}
        updateChicken={handleUpdateChicken}
        deleteChicken={handleDeleteChicken}
        chickenRun={handleChickenRun}
        chicken={chicken}
        />
        ))}
      </main>
    </div>
  )
}

export default App;
