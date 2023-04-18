import { useState } from 'react'
import createCommentService from '../../services/post/createCommentService'
import { type CreateComment, type Comment } from '../../types/Post'

interface UseCreateCommentResult {
  createComment: (post: CreateComment) => Promise<Comment>
  isLoading: boolean
  error: string | null
}

const useCreateComment = (): UseCreateCommentResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const createComment = async (comment: CreateComment): Promise<Comment> => {
    setIsLoading(true)

    try {
      const createdComment = await createCommentService(comment)
      setIsLoading(false)
      return createdComment
    } catch (error) {
      setIsLoading(false)
      console.error({ error })
      setError(error.message)
      throw error
    }
  }

  return {
    createComment,
    isLoading,
    error
  }
}

export default useCreateComment
