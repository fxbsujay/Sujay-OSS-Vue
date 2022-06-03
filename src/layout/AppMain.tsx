import { defineComponent } from 'vue'

export default defineComponent({

    /**
     *  render() {
     *      return <div>APPMAIN</div>
     *   }
     */
    setup() {
        return () => (
            <router-view/>
        )
    }
})