import { type AxiosResponse } from 'axios'
import apiClient from '../../config/apiClient'
import { type User } from '../../types/Auth'

const getUserService = async (token: string): Promise<User> =>
  await new Promise<User>(async (resolve, reject): User => {
    try {
      const response: AxiosResponse<User> = await apiClient.get('/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      resolve(response.data)
    } catch (error) {
      reject(error)
    }
  })

export default getUserService
