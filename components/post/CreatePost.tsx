import React from 'react'
import {
  InputLabel,
  Button,
  Box,
  Paper,
  CircularProgress
} from '@mui/material'
import { Add } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import UserAvatar from '../layout/UserAvatar'
import useCreatePost from '../../hooks/post/useCreatePost'
import usePostsListContext from '../../hooks/post/usePostsListContext'
import createPostValidation from '../../validations/createPostValidation'
import ErrorMessage from '../shared/ErrorMessage'
import { useFormik } from 'formik'
import RequiresAuth from '../auth/guard/RequiresAuth'
export const useNoBorderStyles = makeStyles({
  noBorder: {
    border: '0',
    outline: 'none',
    width: '100%'
  }
})

const CreatePost = (): JSX.Element => {
  const { onAddPost } = usePostsListContext()

  const classes = useNoBorderStyles()
  const { isLoading, error, createPost } = useCreatePost()
  const formik = useFormik({
    initialValues: {
      content: ''
    },
    onSubmit: async (values, { resetForm }) => {
      console.log({ values })
      const createdPost = await createPost({ content: values.content })
      onAddPost(createdPost)
      resetForm()
    },
    validationSchema: createPostValidation
  })

  const fieldError =
    formik.values.content.length === 0 || Object.keys(formik.errors).length > 0
  return (
    <Paper sx={{ p: 5 }}>
      <UserAvatar withName />
      <Box sx={{ px: 13, pt: 3 }}>
        <form onSubmit={formik.handleSubmit}>
          <InputLabel style={{ color: 'black' }} htmlFor="content">
            Pide a tus amigos una confesion anonima
          </InputLabel>
          <RequiresAuth>
            <textarea
              name="content"
              id="content"
              placeholder="Confiesame algo, es anomino..."
              className={classes.noBorder}
              value={formik.values.content}
              disabled={isLoading}
              onChange={(event) => {
                formik.handleChange(event)
                event.target.style.height = 'auto'
                event.target.style.height = `${event.target.scrollHeight}px`
              }}
              rows={4}
              style={{ marginTop: 20 }}
            />
          </RequiresAuth>
        </form>
      </Box>

      {typeof formik.errors.content === 'string' && (
        <ErrorMessage message={formik.errors.content} />
      )}

      {typeof error === 'string' && <ErrorMessage message={error} />}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button
          disabled={isLoading || fieldError}
          variant="contained"
          color="primary"
          startIcon={isLoading ? <CircularProgress size={18} /> : <Add />}
          onClick={() => formik.handleSubmit()}
        >
          Publicar
        </Button>
      </Box>
    </Paper>
  )
}

export default CreatePost
