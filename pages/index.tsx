import React, { useEffect } from 'react'
import AppLayout from '../components/layout/AppLayout'
import CreatePost from '../components/post/CreatePost'
import PostsList from '../components/post/PostsList'
import { type GetStaticProps } from 'next'
import { type PostsPageProps } from '../types/Post'
import getPostsService from '../services/post/getPostsService'
import usePostsListContext from '../hooks/post/usePostsListContext'
import { PostsListContextProvider } from '../context/PostsListContext'
const IndexPage = ({ posts: initialPosts }: PostsPageProps): JSX.Element => {
  const { posts, setPosts } = usePostsListContext()

  useEffect(() => {
    if (initialPosts !== null) setPosts(initialPosts)
  }, [initialPosts])

  return (
    <AppLayout title="Confess Box ">
      <CreatePost />
      <PostsList posts={posts} />
    </AppLayout>
  )
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async (
  context
) => {
  try {
    const posts = await getPostsService()

    return {
      props: { posts }
    }
  } catch (error) {
    console.error({ error })
    throw error
  }
}

export default function IndexPageWithPostsProvider (
  props: PostsPageProps
): JSX.Element {
  return (
    <PostsListContextProvider>
      <IndexPage {...props} />
    </PostsListContextProvider>
  )
}
