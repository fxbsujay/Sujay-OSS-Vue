import { defineComponent, reactive } from 'vue'
import { RoomMode } from '@/model/RoomMode'
import { page } from '@/api/room'
import { PageData, QueryParams} from '@/model/BaseModel'
import {TableColumnType, TablePaginationConfig} from 'ant-design-vue'
import { RoomConstant } from '@/constant/sys-constant'

/**
 * @author fxbsujay@gmail.com
 * @version 13:56 2022/6/18
 */
class PageParams extends QueryParams{
    name: string = ''
}

const columns: TableColumnType<RoomMode>[] = [
    {
        key: 'name',
        title: '名称',
        dataIndex: 'name',
        align: 'center'
    },
    {
        key: 'access',
        title: '访问权限',
        dataIndex: 'access',
        align: 'center',
        customRender: ({text, record})=>{
            return RoomConstant.find( item => item.key === text) ? RoomConstant.find( item => item.key === text).value : '---';
        }
    },
    {
        key: 'serverName',
        title: '服务器',
        dataIndex: 'serverName',
        align: 'center'
    },
    {
        key: 'updateDate',
        title: '修改日期',
        dataIndex: 'updateDate',
        align: 'center'
    },
    {
        dataIndex: 'range',
        title: 'aaaaa',
        align: 'right',
        slots: { customRender: 'range' },
    },

]

export default defineComponent({
    name: 'RoomIndex',
    methods: {
      queryList() {

      }
    },
    setup () {

        const data = reactive({
            pageData: new PageData(),
            pageParams: new PageParams(),
            loading: false
        })

        /**
         * 分页查询
         */
        const queryList = () => {
            data.loading = true
            page(data.pageParams).then(res => {
                if (res.list) {
                    data.pageData.list = res.list
                    data.pageData.total = res.total
                }
                data.loading = false
            }).catch( res => {
                data.loading = false
            })
        }

        /**
         * 新增修改
         * @param id ID
         */
        const saveAndUpdate = ( id?: number ) => {
          
        }

        /**
         * 分页操作
         * @param pagination
         */
       const tablePaginationChange = (pagination: TablePaginationConfig) => {
            data.pageParams.page = pagination.current
            data.pageParams.limit = pagination.pageSize
            queryList()
        }
        /**
         * 操作烂
         */
        const actionBar = () => {
          return (
              <a-space align="center">
                  <a-button type="primary" onClick={ saveAndUpdate } >创建空间</a-button>
                  <a-input-search
                      v-model:value={ data.pageParams.name }
                      placeholder="请输入空间名称"
                      enter-button
                      onSearch={ queryList }
                  />
              </a-space>
          )
        }

        queryList()

        const tabel = () => {
            return (
                <div>
                    { actionBar() }
                    <a-spin
                        spinning={ data.loading }
                    >
                        <a-table
                            columns={ columns }
                            data-source={ data.pageData.list }
                            rowKey="id"
                            pagination={ {
                                total: data.pageData.total,
                                current: data.pageParams.page,
                                pageSize: data.pageParams.limit,
                                showTotal: ( total: number ) => `共 ${total} 条`,
                                showSizeChanger: true,
                                pageSizeOptions: ["10", "20", "50", "100"],
                                showQuickJumper: true,
                            }}
                            onChange={ tablePaginationChange }
                            v-slots={{
                                range: (scope: any) => {
                                    return (
                                        <trend flag={scope.record.status === 0 ? 'up' : 'down'}>{scope.text}%</trend>
                                    );
                                },
                            }}
                        >
                        </a-table>
                    </a-spin>
                </div>
            )
        }

        return () =>(
           <div>
               { tabel() }
           </div>
        )
    }
})