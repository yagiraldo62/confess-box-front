import React from 'react'
import Post from './Post'
import { Box } from '@mui/material'
import { type PostsPageProps } from '../../types/Post'
const PostsList = ({ posts }): React.FC<PostsPageProps> => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, my: 3 }}>
    {posts.map((post, i) => (
      <Post post={post} key={i} />
    ))}
  </Box>
)

export default PostsList
