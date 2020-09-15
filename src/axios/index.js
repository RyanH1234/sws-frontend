import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production' ? null : 'http://127.0.0.1:5000';

const instance = axios.create({
  baseURL,
  headers: {}
})

export default instance