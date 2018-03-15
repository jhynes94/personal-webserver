import axios from 'axios'

var baseURL = `/`
if (process.env.NODE_ENV === "development") {
    baseURL = `http://localhost:3000`;
}

export default () => {
  return axios.create({
    baseURL: baseURL
  })
}