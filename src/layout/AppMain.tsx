import { defineComponent } from 'vue'

export default defineComponent({

    /**
     *  render() {
     *      return <div>APPMAIN</div>
     *   }
     */
    setup() {
        return () => (
            <div class="app-main">
                <router-view/>
            </div>

        )
    }
})