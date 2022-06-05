import { defineComponent,toRef } from 'vue'
import { AsyncRoutes } from '../router'
import { RouteRecordRaw } from 'vue-router'

/**
 * @description 菜单组件
 * @author fxbsujay@gmail.com
 * @version 17:50 2022/6/5
 */
export default defineComponent({
    name: 'LayoutMenu',
    components: {
    },
    props: {
        routes: Array<RouteRecordRaw>
    },
    methods: {
        getNavMenuItems(item: Array<RouteRecordRaw>) {
            return item.map(item => {
                if (item.children && item.children.length > 1) {
                    return this.getSubMenuOrItem(item)
                }
                return  (
                    <a-menu-item key={item.path}>
                        <router-link to={item.path}>{item.meta ? item.meta.title : item.name}</router-link>
                    </a-menu-item>
                )

            })
        },
        getSubMenuOrItem( item: RouteRecordRaw ) {
            if (!item.children) {
                return
            }
            return (
                <a-sub-menu title={item.name} key={item.path}>
                    { this.getNavMenuItems(item.children)}
                </a-sub-menu>
            )
        }
    },
    render() {
        return (
            <> { this.getNavMenuItems(AsyncRoutes)} </>
        )
    }
})