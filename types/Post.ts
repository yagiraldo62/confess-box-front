import { type User } from './Auth'

export interface Post {
  id: number
  content: string
  createdAt: string
  updatedAt: string
  expiresAt: string | null
  authorId: number | null
  author: Pick<User, 'id', 'name', 'photo'> | null
  comments: Comment[]
  _count: {
    comments: number
  }
}

export interface Comment {
  id: number
  content: string
  createdAt: string
}

export interface CreatePost extends Pick<Post, 'content'> {}

export interface CreateComment extends Pick<Comment, 'content'> {
  postId: number
}

export interface PostsPageProps {
  posts: Post[]
}
