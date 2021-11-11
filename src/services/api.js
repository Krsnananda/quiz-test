import axios from "axios"

export default axios.create({
  baseURL: 'https://opentdb.com/',
  timeout: 2000,
  headers: {
    'Accept': 'application/json'
  }
})
