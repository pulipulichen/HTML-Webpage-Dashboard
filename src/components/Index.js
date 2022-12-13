/* global Node */
//import $ from 'jquery'
import NavigationBar from './NavigationBar/NavigationBar.vue'
import ConfigurationPanel from './ConfigurationPanel/ConfigurationPanel.vue'
import Dashboard from './Dashboard/Dashboard.vue'

let Index = {
  props: ['config', 'localConfig', 'utils', 'routingID'],
  data() {
    this.$i18n.locale = this.config.localConfig
    return {
    }
  },
  components: {
    NavigationBar,
    Dashboard,
    ConfigurationPanel
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
      this.setTab()
    },
    setDocument () {
      if (this.config.dashboardConfig.title) {
        document.title = this.config.dashboardConfig.title
      }
      if (this.config.dashboardConfig.favicon) {
        document.querySelector('link[rel="icon"]').href = this.config.dashboardConfig.favicon
      }
      if (this.config.dashboardConfig['theme-color']) {
        document.querySelector('meta[name="theme-color"]').content = this.config.dashboardConfig['theme-color']
      }
    },
    setTab: function() {
      if (!this.config.dashboardConfig.tabs) {
        return false
      }

      let tabs = this.config.dashboardConfig.tabs.map(t => t.title)

      if (tabs.indexOf(this.localConfig.tab) > -1) {
        return true
      }

      this.localConfig.tab = tabs[0]
    }
  }
}
// import IndexMethodsPostMessage from './IndexMethodsPostMessage.js'
// IndexMethodsPostMessage(Index)

//import IndexMethodsTest from './IndexMethodsTest.js'
//IndexMethodsTest(Index)

export default Index