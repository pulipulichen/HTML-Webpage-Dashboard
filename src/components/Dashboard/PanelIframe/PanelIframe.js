let app = {
  props: ['config', 'localConfig', 'utils', 'routingID', 'tab', 'tabType', 'url', 'panelIndex'],
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
    computedURL () {
      if (this.url === 'https://pulipulichen.github.io/HTML-Note-Fullscreen/') {
        return this.noteURL
      }
      else if (this.url === 'https://pulipulichen.github.io/PWA-Countdown-Timer/' || 
      this.url === 'https://pulipulichen.github.io/PWA-Todo-List/') {
        return this.withIDURL
      }
      return this.url
    },
    appID () {
      return encodeURIComponent(this.panelIndex + '_' + this.tab + '_' + this.routingID)
    },
    noteURL () {
      return this.url + '?id=' + this.addID + '&fontSize=2rem'
    },
    withIDURL () {
      return this.url + '?id=' + this.addID
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app