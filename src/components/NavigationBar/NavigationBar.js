import NavigationBarButton from './NavigationBarButton/NavigationBarButton.vue'

let app = {
  props: ['config', 'localConfig', 'utils', 'routingID'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      focusTab: 0
    }
  },
  components: {
    NavigationBarButton
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    '$parent.tab' () {
      this.focusTab = 0
    }
  },
  computed: {
    computedClasses () {
      // console.log(this.config.dashboardConfig['dashboard-type'])
      return {
        inverted: (this.config.dashboardConfig['theme-inverted'] === true), 
        bottom: (this.config.dashboardConfig['navigation-position'] === 'bottom'),
        'mini compact': (this.config.dashboardConfig['dashboard-type'] === 'simple')
      }
    },
    buttons () {
      return this.$parent.buttons
    },
    openableURLList () {
      let list = this.$parent.urlList.filter(u => (typeof(u) === 'string'))
      .map((url, i) => this.utils.url.filterURL(url, i, this.localConfig.tab))
      // console.log(list)
      return list
    },
    openablePanelList () {
      let tab = this.localConfig.tab
      let types = this.$parent.tab.type.split('_')

      let list = []
      this.$parent.urlList.map((url, i) => { 
        if (typeof(url) !== 'string') {
          return false
        }

        list.push({
          // panel: 
          type: types[i],
          url: this.utils.url.filterURL(url, i, tab)
        })
      })

      return list
    },
    type () {
      if (!this.config.dashboardConfig || 
        !this.config.dashboardConfig['dashboard-type']) {
        return 'dropdown'
      }
      return this.config.dashboardConfig['dashboard-type']
    }
  },
  mounted() {
    
  },
  methods: {
    popupWindow (url) {
      this.utils.PopupUtils.openURLFullscreen(url)
    },
    parseType (type) {
      if (!type) {
        return false
      }

      return type.toUpperCase()
    }
  }
}

export default app