import { type AxiosResponse } from 'axios'
import apiClient from '../../config/apiClient'
import { type Post } from '../../types/Post'

const getPostsService = async (): Promise<Post[]> =>
  await new Promise<Post[]>(async (resolve, reject): Post[] => {
    try {
      const response: AxiosResponse<Post[]> = await apiClient.get('/post')
      resolve(response.data)
    } catch (error) {
      reject(error)
    }
  })

export default getPostsService
