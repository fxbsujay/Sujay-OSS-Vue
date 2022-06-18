import { BaseModel } from '@/model/BaseModel'

export interface RoomMode extends BaseModel{

    /**
     * 名称
     */
    name: string,

    /**
     * 服务器id
     */
    serverId?: number,

    /**
     * 访问权限 0 私有 1 公开
     */
    access?: string

}