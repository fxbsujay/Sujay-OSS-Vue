import { RequestParams } from './http'
import https from './http/https'
import { Method, ContentType } from './http'
import { RoomMode } from '@/model/RoomMode'
import { PageData } from '@/model/BaseModel'

/**
 * <p>空间列表分页查询</p>
 * @author fxbsujay@gmail.com
 * @version 14:09 2022/6/18
 */
export const page = async (params: RequestParams) => {
    return https().request<PageData<RoomMode>>('room/page', Method.GET, params, ContentType.form)
}

/**
 * <p>空间列表新增</p>
 * @author fxbsujay@gmail.com
 * @version 14:09 2022/6/18
 */
export const save = async (params: RoomMode) => {
    return https().request<void>('room', Method.POST, params, ContentType.json)
}

/**
 * <p>空间列表修改</p>
 * @author fxbsujay@gmail.com
 * @version 14:09 2022/6/18
 */
export const update = async (params: RoomMode) => {
    return https().request<void>('room', Method.PUT, params, ContentType.json)
}

/**
 * <p>空间列表详情</p>
 * @author fxbsujay@gmail.com
 * @version 23:36 2022/6/20
 */
export const info = async () => {
    return https().request<void>('room', Method.PUT, {}, ContentType.json)
}