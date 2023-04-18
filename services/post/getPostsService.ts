import { type AxiosResponse } from 'axios'
import apiClient from '../../config/apiClient'
import { type Post } from '../../types/Post'

const getPostsService = (): Promise<Post[]> =>
  new Promise(async (resolve, reject) => {
    try {
      const response: AxiosResponse<Post[]> = await apiClient.get('/post')
      resolve(response.data)
    } catch (error) {
      reject(error)
    }
  })
export default getPostsService
