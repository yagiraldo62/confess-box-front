import React from 'react'
import moment from 'moment'
import { InputLabel, Button, Box, Paper, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import UserAvatar from '../layout/UserAvatar'
import useCreatePost from '../../hooks/post/CreatePost/useCreatePost'
import createPostValidation from '../../validations/createPostValidation'
import ErrorMessage from '../shared/ErrorMessage'
import CreateComment from './comment/CreateComment'
import CommentsList from './comment/CommentsList'
import { Post } from '../../types/post/Post'
const Post = ({ post }): React.FC<{ posts: Post[] }> => {
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

      {/* {typeof formik.errors.content === 'string' && (
        <ErrorMessage message={formik.errors.content} />
      )}

      {typeof error === 'string' && <ErrorMessage message={error} />}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button
          disabled={isLoading || fieldError}
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={formik.handleSubmit}
        >
          Publicar
        </Button> */}
    </Paper>
  )
}

export default Post
