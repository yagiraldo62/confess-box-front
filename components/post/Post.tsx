import React from 'react'
import moment from 'moment'
import { Box, Paper, Typography } from '@mui/material'
import UserAvatar from '../layout/UserAvatar'
import CreateComment from './comment/CreateComment'
import CommentsList from './comment/CommentsList'
import { type Post as TPost } from '../../types/post/Post'
const Post = ({ post }: { post: TPost }): JSX.Element => {
  const { author, content, createdAt, comments } = post

  return (
    <Paper sx={{ p: 5 }}>
      <UserAvatar
        withName
        altUser={author}
        altText={moment(createdAt).calendar()}
      />
      <Box sx={{ px: 13, py: 3 }}>
        <Typography>{content}</Typography>
        <CreateComment post={post} />
        <CommentsList comments={comments} />
      </Box>
    </Paper>
  )
}

export default Post
