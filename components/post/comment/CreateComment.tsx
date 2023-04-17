import React from 'react'
import { useFormik } from 'formik'
import { makeStyles } from '@mui/styles'
import { IconButton, CircularProgress } from '@mui/material'
import { useNoBorderStyles } from '../CreatePost'
import SendIcon from '@mui/icons-material/Send'
import RequiresAuth from '../../auth/guard/RequiresAuth'
import usePostsListContext from '../../../hooks/post/usePostsListContext'
import useCreateComment from '../../../hooks/post/useCreateComment'
import { type Post } from '../../../types/post/Post'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15
  },
  textField: {
    marginRight: 4,
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12
  },
  button: {
    marginLeft: 4
  }
}))

function CreateComment ({ post }: { post: Post }): JSX.Element {
  const classes = useStyles()
  const classesNoBorder = useNoBorderStyles()
  const { onAddComment } = usePostsListContext()
  const { isLoading, createComment } = useCreateComment()

  const formik = useFormik({
    initialValues: {
      content: ''
    },
    onSubmit: async (values, { resetForm }) => {
      const createdComment = await createComment({
        content: values.content,
        postId: post.id
      })
      onAddComment(post.id, createdComment)
      resetForm()
    }
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.root}>
          <RequiresAuth>
            <input
              className={`${classes.textField} ${classesNoBorder.noBorder}`}
              id="content"
              name="content"
              placeholder="Comentar..."
              disabled={isLoading}
              onChange={(event) => {
                formik.handleChange(event)
              }}
              value={formik.values.content}
            />
          </RequiresAuth>
          {formik.values.content.length > 0 && (
            <IconButton
              disabled={isLoading}
              size="sm"
              aria-label="send comment"
              color="secondary"
              className={classes.button}
              onClick={formik.handleSubmit}
            >
              {isLoading ? <CircularProgress size={18} /> : <SendIcon />}
            </IconButton>
          )}
        </div>
      </form>
    </>
  )
}

export default CreateComment
