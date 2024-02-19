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
      if (!this.url) {
        return '#'
      }

      let url = this.url

      if (url.startsWith('COPY:')) {
        let pos = url.indexOf(':http')
        if (pos > -1) {
          return url.slice(pos + 1)
        }
        return false
      } 
      
      return url
    },
  },
  mounted() {
    
  },
  methods: {
    open () {
      if (!this.url) {
        return false
      }

      let url = this.url

      // utils.PopupUtils.openURLFullscreen(url)
      // console.log(this.url, url.toUpperCase().startsWith('IFRAME:'))
      if (url.toUpperCase().startsWith('COPY:')) {
        let str = this.compustedURL
        this.utils.ClipboardUtils.copyPlainString(str)
        return true
      }
      else {
        // console.log(this.compustedURL)
        this.utils.PopupUtils.openURLFullscreen(this.compustedURL)
      }
    }
  }
}

export default app