import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { type GetStaticPaths, type GetStaticProps } from 'next'
import { type AuthPageProps } from '../../types/Auth'
import getUserService from '../../services/auth/getUserService'
import PageSpinner from '../../components/shared/PageSpinner'
import { setAuthState } from '../../store/AuthStore'
import { AuthToken } from '../../config/authToken'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

const AuthPage: React.FC<AuthPageProps> = ({ user, token, authenticated }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    if (authenticated) {
      AuthToken.setToken(token)
      dispatch(setAuthState({ user, token, authenticated }))
      router.push('/')
    }
  }, [authenticated])

  return (
    <Container maxWidth="sm">
      <PageSpinner title="Verificando datos del usuario" />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<AuthPageProps> = async (
  context
) => {
  const { token } = context?.params
  if (typeof token !== 'string') return { props: { authenticated: false } }

  try {
    const user = await getUserService(token)

    return {
      props: { token, user, authenticated: true }
    }
  } catch (error) {
    console.error({ error })
    throw error
  }
}

export default AuthPage
