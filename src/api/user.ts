import { RequestParams } from './http'
import https from './http/https'
import { RootObject } from '../model/RootObject';
import { LoginModel } from '../model/UserModel'
import { Method, ContentType } from './http'


export const loginRequest = (userInfo: RequestParams) => {
    return https(false).request<RootObject<LoginModel>>('user/login', Method.POST, userInfo, ContentType.json)
}