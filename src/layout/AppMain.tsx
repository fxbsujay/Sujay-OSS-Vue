import { defineComponent } from 'vue'

export default defineComponent({

    /**
     *  render() {
     *      return <div>APPMAIN</div>
     *   }
     */
    render() {
        return  (
            <div class="app-main">
                <a-button type="primary">Primary Button</a-button>
                <router-view/>
            </div>
        )
    }
})