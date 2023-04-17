export interface User {
  email: string
  name: string
  photo: string
}

export interface AuthPageProps {
  token?: string
  user?: User
  authenticated: boolean
}
