import { useSelector } from 'react-redux'
import { selectAuthState, type AuthState } from '../../store/AuthStore'
export default function useAuth (): AuthState {
  return useSelector(selectAuthState)
}
