
let app = {
  props: ['config', 'localConfig', 'utils', 'routingID'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      focusTab: 0
    }
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
    openableURLList () {
      return this.$parent.urlList.filter(u => (typeof(u) === 'string'))
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