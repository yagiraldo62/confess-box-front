import { useState } from 'react'
import createPostService from '../../services/post/createPostService'
import { type CreatePost } from '../../types/Post'

interface UseCreatePostResult {
  createPost: (post: CreatePost) => Promise<void>
  isLoading: boolean
  error: string | null
}

const useCreatePost = (): UseCreatePostResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const createPost = async (post: CreatePost): Promise<void> => {
    setIsLoading(true)

    try {
      const createdPost = await createPostService(post)
      setIsLoading(false)
      return createdPost
    } catch (error) {
      setIsLoading(false)
      console.error({ error })
      setError(error.message)
    }

    setIsLoading(false)
  }

  return {
    createPost,
    isLoading,
    error
  }
}

export default useCreatePost
