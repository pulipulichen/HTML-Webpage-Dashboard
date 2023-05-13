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
    },
    compustedURL () {
      if (this.url.startsWith('COPY:')) {
        return false
      }
      return this.url
    },
    computedTitle () {
      if (this.url.startsWith('COPY:')) {
        return this.url.slice(5)
      }
      return this.title
    }
  },
  mounted() {
    
  },
  methods: {
    open () {
      // utils.PopupUtils.openURLFullscreen(url)
      if (this.url.startsWith('COPY:')) {
        let str = this.url.slice(5)
        this.utils.ClipboardUtils.copyPlainString(str)
      }
      else {
        this.utils.PopupUtils.openURLFullscreen(this.url)
      }
      
    }
  }
}

export default app