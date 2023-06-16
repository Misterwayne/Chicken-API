import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:7000"

export const getChicken = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/chicken"
    )
    return todos
  } catch (error) {
    throw (error)
  }
}

export const addChicken = async (
    formData: IChicken
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const chicken: Omit<IChicken, "_id"> = {
        name: formData.name,
        birthday: formData.birthday,
        weight: formData.weight,
        steps: formData.steps,
        isRunning: false,
      }
      const saveChicken: AxiosResponse<ApiDataType> = await axios.post(
        baseUrl + "/chicken",
        chicken
      )
      return saveChicken
    } catch (error) {
      throw (error)
    }
  }

export const updateChicken = async (
    chicken: IChicken
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const chickenUpdate: Omit<IChicken, "_id"> = {
        name: chicken.name,
        birthday: chicken.birthday,
        weight: chicken.weight,

      }
      const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
        `${baseUrl}/chicken/${chicken._id}`,
        chickenUpdate
      )
      return updatedTodo
    } catch (error) {
      throw (error)
    }
}

export const deleteChicken = async (
    _id: string
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const deletedChicken: AxiosResponse<ApiDataType> = await axios.delete(
        `${baseUrl}/chicken/${_id}`
      )
      return deletedChicken
    } catch (error) {
      throw (error)
    }
}

export const chickenRun = async (
    _id: string
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const updatedTodo: AxiosResponse<ApiDataType> = await axios.patch(
        `${baseUrl}/chicken/run/${_id}`
      )
      return updatedTodo
    } catch (error) {
      throw (error)
    }
}
  
