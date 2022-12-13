
let app = {
  props: ['config', 'localConfig', 'utils', 'routingID'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    buttons () {
      if (!this.config.dashboardConfig || !this.config.dashboardConfig.buttons) {
        return []
      }
      let buttonsMap = this.config.dashboardConfig.buttons
      console.log(buttonsMap)
      return Object.keys(buttonsMap).map(title => {
        return {
          title,
          url: buttonsMap[title]
        }
      })
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