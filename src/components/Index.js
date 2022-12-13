/* global Node */
//import $ from 'jquery'
import axios from 'axios'

let Index = {
  props: ['config', 'localConfig', 'utils', 'routingID'],
  data() {
    this.$i18n.locale = this.config.localConfig
    return {
    }
  },
  components: {
  },
  computed: {
  },
  watch: {
    'config.inited'() {
      if (this.config.inited === false) {
        return false
      }
    },
  },
  mounted() {
    // console.log(this.routingID)
    this.loadDashboardConfig()
  },
  methods: {
    loadDashboardConfig: async function () {

      let dashboardConfigURL = this.routingID
      dashboardConfigURL = './assets/settings/demo1.json'
      // console.log(dashboardConfigURL)
      this.config.dashboardConfig = await this.utils.AxiosUtils.get(dashboardConfigURL)

      this.setDocument()
    },
    setDocument () {
      if (this.config.dashboardConfig.title) {
        document.title = this.config.dashboardConfig.title
      }
      if (this.config.dashboardConfig.favicon) {
        document.querySelector('link[rel="icon"]').href = this.config.dashboardConfig.favicon
      }
      if (this.config.dashboardConfig['theme-color']) {
        document.querySelector('meta[name="themen-color"]').content = this.config.dashboardConfig['theme-color']
      }
    }
  }
}
// import IndexMethodsPostMessage from './IndexMethodsPostMessage.js'
// IndexMethodsPostMessage(Index)

//import IndexMethodsTest from './IndexMethodsTest.js'
//IndexMethodsTest(Index)

export default Index