import axios from 'axios'
axios.defaults.timeout = 30000

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
})

interface RequestOptions {
  headers: {
    Authorization?: string
  }
}

const formatHeader = (token?: string): RequestOptions => {
  let auth = token ? `Bearer ${token}` : undefined
  return { headers: { Authorization: auth } }
}

export { instance, formatHeader }
