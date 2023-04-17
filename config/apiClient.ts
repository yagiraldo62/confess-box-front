import axios from 'axios'
import { AuthToken } from './authToken'

// Crea una instancia de Axios con una base URL y cualquier otra configuración que necesites
const apiClient = axios.create({
  baseURL: process.env.API_URL
})

// Intercepta todas las solicitudes y agrega el token de autenticación a los encabezados
apiClient.interceptors.request.use(
  (config) => {
    // Si estamos en el navegador, verifica el token y lo agrega al request
    if (AuthToken.storageEnabled()) {
      const token = AuthToken.getToken()
      if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  async (error) => await Promise.reject(error)
)

export default apiClient
