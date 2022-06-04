/**
 * <p>请求客户端配置</p>
 * @author fxbsujay@gmail.com
 * @version 13:24 2022/6/3
 */
import HttpClient, { HttpClientConfig } from './index'
import Keys from '../../constant/key'
import { useStore } from 'vuex'
const https = (hasToken: Boolean = true) => {

  const config: HttpClientConfig = {
    baseURL: 'http://localhost:4000/api',
    clickInterval: 1000,
    headers: {
      [Keys.tokenKey]: hasToken ? useStore().state.app.token : ''
    }
  }
  return new HttpClient(config)
}

export default https
