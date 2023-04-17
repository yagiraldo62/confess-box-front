import React, { createContext, useState } from 'react'
import { type Post, type Comment } from '../types/Post'

interface PostsListContextProps {
  posts: Post[]
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
  onAddPost: (post: Post) => void
  onAddComment: (postId: number, comment: Comment) => void
}

export const PostsListContext = createContext<PostsListContextProps>({
  posts: [],
  setPosts: () => {},
  onAddPost: () => {},
  onAddComment: () => {}
})

interface PostsListContextProviderProps {
  children: React.ReactNode
}

export const PostsListContextProvider = ({
  children
}: PostsListContextProviderProps) => {
  const [posts, setPosts] = useState<Post[]>([])
  const onAddPost = (post: Post) => {
    setPosts([post, ...posts])
  }
  const onAddComment = (postId: number, comment: Comment) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) post.comments = [comment, ...post.comments]
        return post
      })
    )
  }

  return (
    <PostsListContext.Provider
      value={{ posts, setPosts, onAddPost, onAddComment }}
    >
      {children}
    </PostsListContext.Provider>
  )
}
