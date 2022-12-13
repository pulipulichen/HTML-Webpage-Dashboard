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
    tab () {
      if (this.localConfig.tab === '' || !this.config.dashboardConfig.tabs) {
        return false
      }
      return this.config.dashboardConfig.tabs.filter(t => (t.title === this.localConfig.tab))[0]
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app