import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 6000
})

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {}
)

const request = {
  get: (url: string, params: any = {}) => {
    const res = instance.get(url, { params: params })
    return res
  },
  post: async (url: string, data: any = '') => {
    const res = await instance.post(url, data)
    return res
  }
}

export default request
