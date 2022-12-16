/* global Node */
import $ from 'jquery'
import NavigationBar from './NavigationBar/NavigationBar.vue'
import ConfigurationPanel from './ConfigurationPanel/ConfigurationPanel.vue'
import Dashboard from './Dashboard/Dashboard.vue'
import LoadingPudding from './LoadingPudding/LoadingPudding.vue'

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
    ConfigurationPanel,
    LoadingPudding
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
      // return await this.utils.AsyncUtils.sleep(3000)

      let dashboardConfigURL = this.getIDParameter()

      if (!dashboardConfigURL) {
        dashboardConfigURL = this.routingID
      }
      // console.log(dashboardConfigURL)

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

      // let url = new URL(location.href)
      // url.searchParams.set('id', encodeURIComponent(id))
      // location.href = url.toString()

      this.$router.push('/' + encodeURIComponent(id))
    },
    setDocument () {

      let manifestJSON = {
        start_url: location.href,
        scope: location.href,
        "display": "standalone",
      }

      if (this.config.dashboardConfig.title) {
        document.title = this.config.dashboardConfig.title
        manifestJSON.name = this.config.dashboardConfig.title
      }
      if (this.config.dashboardConfig.favicon) {
        document.querySelector('link[rel="icon"]').href = this.config.dashboardConfig.favicon
        // let size = this.getImageSize(this.config.dashboardConfig.favicon)
        manifestJSON.icons = [
          {"src": this.config.dashboardConfig.favicon}
        ]
      }
      if (this.config.dashboardConfig['theme-color']) {
        document.querySelector('meta[name="theme-color"]').content = this.config.dashboardConfig['theme-color']
        manifestJSON.background_color = this.config.dashboardConfig['theme-color']
      }

      /*
startUrl = 'https://stackoverflow.com/questions/57763393/localising-a-pwa-web-manifest';
document.head
  .querySelector(':first-child')
  .insertAdjacentHTML(
    'beforebegin',
    `<link rel="manifest" href='data:application/manifest+json,{"start_url":"${startUrl}", "name": "OKK", "icons": [{"src": "https://pulipulichen.github.io/HTML-Webpage-Dashboard/assets/favicon/favicon.png","sizes": "512x512","type":"image/png"}]}' />`,
  );
      */
      // let manifest = $('head > link[ref="manifest"]')
      // if (manifest.length > 0) {
      //   manifest.remove()
      // }

      // $('head').append(`<link rel="manifest" href='data:application/manifest+json,${JSON.stringify(manifestJSON)}' />`)
    },
    getImageSize (imgURL) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function() {
          // alert(this.width + 'x' + this.height);
          return {
            width: this.width,
            height: this.height
          }
        }
        img.src = imgURL;
      })
        
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