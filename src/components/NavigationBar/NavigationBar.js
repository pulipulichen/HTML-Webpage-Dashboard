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
      return this.$parent.urlList.filter(u => (typeof(u) === 'string'))
				.map((url, i) => this.utils.url.filterURL(url, i, this.localConfig.tab))
    },
    openablePanelList () {
      let tab = this.localConfig.tab
      let types = this.$parent.tab.type.split('_')
      return this.$parent.urlList.map((url, i) => { 
        return {
          // panel: 
          type: types[i],
          url: this.utils.url.filterURL(url, i, tab)
        }
      })
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
    }
  }
}

export default app