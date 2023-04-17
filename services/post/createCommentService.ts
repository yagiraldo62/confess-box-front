import { type AxiosResponse } from 'axios'
import apiClient from '../../config/apiClient'
import { type Comment } from '../../types/Post'

const createCommentService = (comment: CreateComment): Promise<Comment> =>
 new Promise<Comment>(async (resolve, reject): Comment => {
    try {
      const response: AxiosResponse<Comment> = await apiClient.post(
        '/comment',
        comment
      )
      resolve(response.data)
    } catch (error) {
      reject(error)
    }
  })

export default createCommentService
