let app = {
  props: ['config', 'localConfig', 'utils', 'routingID', 'url', 'title'],
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
    favicon () {
      return this.utils.URLUtils.parseLinkFavicon(this.url)
    },
    computedClasses () {
      let classes = []

      // {disabled: !url}
      if (!this.url) {
        classes.push('disabled')
      }

      // if (this.icon) {
      //   classes.push('labeled icon')
      // }
      if (this.favicon) {
        classes.push('favicon')
      }

      return classes
    }
    
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app