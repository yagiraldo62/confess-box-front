const path = require("path");
const dotenv = require('dotenv');

module.exports = () => {
  dotenv.config()
  return {
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
  }
};
