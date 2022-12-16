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
      example: './assets/settings/demo1.json',
      lastRouteID: ``
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
      let splitor = '_'
      if (this.tab.type.indexOf(',') > -1) {
        splitor = ','
      }
      return this.tab.type.split(splitor)
    },
    buttons () {
      if (!this.config.dashboardConfig || !this.config.dashboardConfig.buttons) {
        return []
      }
      let buttonsMap = this.config.dashboardConfig.buttons
      // console.log(buttonsMap)
      return Object.keys(buttonsMap).map(title => {
        return {
          title,
          url: buttonsMap[title]
        }
      })
    },
  },
  watch: {
    'config.inited'() {
      if (this.config.inited === false) {
        return false
      }
    },
    'routingID' () {
      // console.log(before, after)
      this.loadDashboardConfig()
    }
  },
  mounted() {
    // console.log(this.routingID)
    this.loadDashboardConfig()
  },
  methods: {
    getIDParameter () {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get('id')
    },
    loadDashboardConfig: async function () {
      let dashboardConfigURL = this.getIDParameter()

      if (!dashboardConfigURL) {
        dashboardConfigURL = this.routingID
      }

      if (!dashboardConfigURL ||
          dashboardConfigURL === '' || 
          dashboardConfigURL === '/') {
        dashboardConfigURL = this.example
      }
      else {
        dashboardConfigURL = decodeURIComponent(dashboardConfigURL)
      }

      if (this.lastRouteID === dashboardConfigURL &&
        dashboardConfigURL !== this.example) {
        return false  
      }


      // for test 20221214-0546 
      // dashboardConfigURL = './assets/settings/demo1.json'

      // for test 20221214-0547 
      // dashboardConfigURL = 'https://script.google.com/macros/s/AKfycbwR2MONo0nxfcyF70QpPGEgN2Xhoo096xOHMoVExv4vbNcKp3P07-eAoudGTpr_BvwcmA/exec'

      // console.log(dashboardConfigURL)
      try {
        this.config.dashboardConfig = await this.utils.AxiosUtils.get(dashboardConfigURL)
      }
      catch (e) {
        // this.$router.push('/' + encodeURIComponent(this.lastRouteID))
        this.setID(this.lastRouteID)
        return false
      }

      this.setDocument()
      this.setTab()

      this.lastRouteID = dashboardConfigURL
    },
    setID(id) {
      if (!id) {
        return false
      }

      let url = new URL(location.href)
      url.searchParams.set('id', encodeURIComponent(id))
      location.href = url.toString()
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