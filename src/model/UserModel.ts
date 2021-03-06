/**
 * 用户对象
 * @author fxbsujay@gmail.com
 */
export interface UserInfoModel {
    id: bigint
    username: string
    password: string
    name: string
    avatar: string
    introduction: string
    email: string
    phone: string
    roles: string[]
}

export interface LoginModel {
    username: string
    password: string
    code: string
    token: string
}
