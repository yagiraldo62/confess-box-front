import { createTheme } from '@mui/material/styles'
import variables from '../assets/css/variables.module.scss'

const theme = createTheme({
  spacing: (factor) => `${0.25 * factor}rem`,
  palette: {
    background: {
      default: '#F5EEF8'
    },
    primary: {
      main: variables.primaryColor
    },
    secondary: {
      main: variables.secondaryColor
    }
  }
})

export default theme
