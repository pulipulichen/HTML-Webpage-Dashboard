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
    tab () {
      if (this.localConfig.tab === '' || !this.config.dashboardConfig.tabs) {
        return false
      }
      return this.config.dashboardConfig.tabs.filter(t => (t.title === this.localConfig.tab))[0]
    },
    urlList () {
      let urlList = this.tab.url
      if (Array.isArray(urlList) === false) {
        urlList = [urlList]
      }
      return urlList
    },
    tabTypes () {
      return this.tab.type.split('_')
    }
  },
  watch: {
    'config.inited'() {
      if (this.config.inited === false) {
        return false
      }
    },
    'routingID' () {
      // console.log('aaa')
      this.loadDashboardConfig()
    }
  },
  mounted() {
    // console.log(this.routingID)
    this.loadDashboardConfig()
  },
  methods: {
    loadDashboardConfig: async function () {

      let dashboardConfigURL = this.routingID

      if (!dashboardConfigURL ||
          dashboardConfigURL === '' || 
          dashboardConfigURL === '/') {
        dashboardConfigURL = './assets/settings/demo1.json'
      }
      else {
        dashboardConfigURL = decodeURIComponent(dashboardConfigURL)
      }

      // for test 20221214-0546 
      // dashboardConfigURL = './assets/settings/demo1.json'

      // for test 20221214-0547 
      // dashboardConfigURL = 'https://script.google.com/macros/s/AKfycbwR2MONo0nxfcyF70QpPGEgN2Xhoo096xOHMoVExv4vbNcKp3P07-eAoudGTpr_BvwcmA/exec'

      console.log(dashboardConfigURL)
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