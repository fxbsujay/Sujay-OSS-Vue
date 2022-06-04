/**
 * <p>Cookie</p>
 * @author fxbsujay@gmail.com
 * @version 21:19 2022/6/4
 */
import Cookies from 'js-cookie'
import Keys from '../constant/key'

export const getToken = () => Cookies.get(Keys.tokenKey)
export const setToken = (token: string) => Cookies.set(Keys.tokenKey, token)
export const removeToken = () => Cookies.remove(Keys.tokenKey)