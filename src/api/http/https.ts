import HttpClient, { HttpClientConfig } from './index'

const https = (hasToken: Boolean = true) => {

  const config: HttpClientConfig = {
    baseURL: 'http://localhost:3000/api',
    headers: {
      token: ''
    }
  }
  return new HttpClient(config)
}

export default https
