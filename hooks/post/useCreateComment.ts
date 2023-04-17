import { useState } from 'react'
import createCommentService from '../../services/post/createCommentService'
import { type CreateComment } from '../../types/Comment'

interface UseCreateCommentResult {
  createComment: (post: CreateComment) => Promise<void>
  isLoading: boolean
  error: string | null
}

const useCreateComment = (): UseCreateCommentResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const createComment = async (comment: CreateComment): Promise<void> => {
    setIsLoading(true)

    try {
      const createdComment = await createCommentService(comment)
      setIsLoading(false)
      return createdComment
    } catch (error) {
      setIsLoading(false)
      console.error({ error })
      setError(error.message)
    }

    setIsLoading(false)
  }

  return {
    createComment,
    isLoading,
    error
  }
}

export default useCreateComment
