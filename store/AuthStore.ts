import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AppState } from './AppStore'
import { HYDRATE } from 'next-redux-wrapper'
import { type AuthPageProps, type User } from '../types/Auth'

// Type for our state
export interface AuthState {
  initialized: boolean
  authenticated: boolean
  user: User | null
  token: string | null
}

// Initial state
const initialState: AuthState = {
  initialized: false,
  authenticated: false,
  user: null,
  token: null
}

// Actual Slice
export const AuthStore = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState (state, action: PayloadAction<AuthPageProps>) {
      const { authenticated, user = null, token = null } = action.payload
      state = {
        ...state,
        authenticated,
        user,
        token,
        initialized: true
      }
      return state
    },
    resetAuthState (state) {
      console.log('resetAuthState')

      state = initialState
      return state
    }
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth
      }
    }
  }
})

export const { setAuthState, resetAuthState } = AuthStore.actions

export const selectAuthState = (state: AppState): AuthState => state.auth

export default AuthStore.reducer
