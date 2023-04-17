const path = require('path')
const dotenv = require('dotenv')

module.exports = () => {
  dotenv.config()

  const { API_URL } = process.env

  return {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')]
    },
    env: {
      API_URL
    }
  }
}
