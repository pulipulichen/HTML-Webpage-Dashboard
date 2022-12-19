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
      return this.url
    },
    noteURL () {
      return this.url + '?id=' + encodeURIComponent(this.panelIndex + '_' + this.tab + '_' + this.routingID) + '&fontSize=2rem'
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app