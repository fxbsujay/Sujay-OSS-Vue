import axios from "axios";
import {HttpClientConfig} from "@/api/http";

/**
 * @author fxbsujay@gmail.com
 */
export interface BaseModel {
   id: number,
   createDate?: string,
   updateDate?: string
}

/**
 * 响应体对象
 * @author fxbsujay@gmail.com
 */
export interface RootObject<T>{
   code: number
   msg: string
   data: T
}

/**
 * 响应体对象
 * @author fxbsujay@gmail.com
 */
export class QueryParams{

   page?: number = 1
   limit?: number = 10

}

/**
 * 响应体对象
 * @author fxbsujay@gmail.com
 */
export class PageData<T>{
   total?: number = 0
   list?: Array<T> = []

}
