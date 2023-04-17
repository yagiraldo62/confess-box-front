import * as Yup from 'yup'

const createPostValidation = Yup.object().shape({
  content: Yup.string().min(
    6,
    'La publicación debe tener almenos 6 caracteres'
  )
})

export default createPostValidation
