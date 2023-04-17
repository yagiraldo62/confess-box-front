import { useContext } from 'react'
import { PostsListContext } from '../../context/PostsListContext'
const usePostsListContext = () => useContext(PostsListContext)

export default usePostsListContext
