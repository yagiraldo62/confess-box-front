import { type AxiosResponse } from 'axios'
import apiClient from '../../config/apiClient'
import { type Post, type CreatePost } from '../../types/Post'

const createPostService = (post: CreatePost): Promise<Post> =>
  new Promise<Post>(async (resolve, reject) => {
    try {
      const response: AxiosResponse<Post> = await apiClient.post('/post', post)
      resolve(response.data)
    } catch (error) {
      reject(error)
    }
  })

export default createPostService
