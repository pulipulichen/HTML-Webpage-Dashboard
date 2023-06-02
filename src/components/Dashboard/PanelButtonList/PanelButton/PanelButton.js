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
      else if (this.url.startsWith('IFRAME:')) {
        let str = this.url.slice(7)
        
        let pos = str.indexOf(':http')
        if (pos === -1) {
          window.alert('ERROR: ' + this.url)
          return false
        }

        let id = Number(str.slice(0, pos))
        id--
        if (id <= 0) {
          id = 1
        }
        let url = str.slice(pos + 1)

        // this.utils.ClipboardUtils.copyPlainString(str)
        // this.$parent.$parent.$refs.PanelIframe[id].src = url
        console.log(this.$parent.$parent.tab.url)
      }
      else {
        this.utils.PopupUtils.openURLFullscreen(this.url)
      }
      
    }
  }
}

export default app