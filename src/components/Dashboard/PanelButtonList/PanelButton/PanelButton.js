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

      if (this.url.startsWith('COPY:')) {
        let pos = this.url.indexOf(':http')
        if (pos > -1) {
          return this.url.slice(pos + 1)
        }
        return false
      }
      if (this.url.startsWith('IFRAME:')) {
        let pos = this.url.indexOf(':http')
        if (pos > -1) {
          return this.url.slice(pos + 1)
        }
        return false
      }
      return this.url
    },
    computedTitle () {
      if (!this.url) {
        return this.title
      }
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
      if (!this.url) {
        return false
      }
      // utils.PopupUtils.openURLFullscreen(url)
      // console.log(this.url)
      if (this.url.startsWith('COPY:')) {
        let str = this.url.slice(5)
        this.utils.ClipboardUtils.copyPlainString(str)
      }
      else if (this.url.startsWith('IFRAME:')) {
        // console.log('20230602-0939')
        // console.log(this.$parent.$parent.tab.url)
        let str = this.url.slice(7)
        
        let pos = str.indexOf(':http')
        let id = 0
        let url = str
        // console.log(pos)
        if (pos === -1) {
          if (str.indexOf('http') === -1) {
            window.alert('ERROR: ' + this.url)
            return false
          }
        }
        else {
          id = Number(str.slice(0, pos))
          // console.log(id)
          id--
          if (id < 0) {
            id = 0
          }
          url = str.slice(pos + 1)
        }
          
        // console.log(id, url)

        // // this.utils.ClipboardUtils.copyPlainString(str)
        // // this.$parent.$parent.$refs.PanelIframe[id].src = url
        // console.log(this.$parent.$parent.tab.url)
        // this.$parent.$parent.tab.url[id] = url
        // console.log(id)
        // window.IFRAME = this.$parent.$parent.$refs.PanelIframe
        // console.log(this.$parent.$parent.$refs.PanelIframe)
        // console.log(this.$parent.$parent.$refs.PanelIframe[id].url)
        this.$parent.$parent.$refs.PanelIframe[id].url = url
        // console.log(this.$parent.$parent.$refs.PanelIframe[id].url)

        // console.log(this.config.dashboardConfig.tabs)
        // console.log(this.localConfig.tab)

        for (let i = 0; i < this.config.dashboardConfig.tabs.length; i++) {
          let {title} = this.config.dashboardConfig.tabs[i]
          // console.log(title, this.localConfig.tab)
          if (title !== this.localConfig.tab) {
            continue
          }
          // console.log('ok')
          this.config.dashboardConfig.tabs[i].url[id] = url
          break
        }
        // this.config.dashboardConfig.tabs.filter(t => (t.title === this.localConfig.tab))[0].url[id] = url
        // console.log('20230603-0028 okk')
      }
      else {
        this.utils.PopupUtils.openURLFullscreen(this.url)
      }
      
    }
  }
}

export default app