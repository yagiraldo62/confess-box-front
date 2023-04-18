import { useState } from 'react'
import createPostService from '../../services/post/createPostService'
import { type Post, type CreatePost } from '../../types/Post'

interface UseCreatePostResult {
  createPost: (post: CreatePost) => Promise<Post>
  isLoading: boolean
  error: string | null
}

const useCreatePost = (): UseCreatePostResult => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const createPost = async (post: CreatePost): Promise<Post> => {
    setIsLoading(true)

    try {
      const createdPost = await createPostService(post)
      setIsLoading(false)
      return createdPost
    } catch (error) {
      setIsLoading(false)
      setError(error.message)
      console.error({ error })
      throw error
    }
  }

  return {
    createPost,
    isLoading,
    error
  }
}

export default useCreatePost
