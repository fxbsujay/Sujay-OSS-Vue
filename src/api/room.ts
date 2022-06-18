import { RequestParams } from './http'
import https from './http/https'
import { Method, ContentType } from './http'
import { RoomMode } from '@/model/RoomMode'
import {PageData} from "@/model/BaseModel";

/**
 * <p>空间列表分页查询</p>
 * @author fxbsujay@gmail.com
 * @version 14:09 2022/6/18
 */
export const page = async (params: RequestParams) => {
    return https(true).request<PageData<RoomMode>>('room/page', Method.GET, params, ContentType.form)
}