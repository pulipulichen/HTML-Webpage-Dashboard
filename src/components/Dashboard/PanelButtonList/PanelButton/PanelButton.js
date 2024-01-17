let app = {
  props: ['config', 'localConfig', 'utils', 'routingID', 'url', 'title'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      searchKeyword: '',
      searchKeywordPlaceholder: `$$$$keyword$$$$`
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
    searchKeywordTrim () {
      return this.searchKeyword.trim()
    },
    computedClasses () {
      let classes = []

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
    isSearchURL () {
      return (this.url.indexOf('$$$$keyword$$$$') !== -1)
      // return true 
    },
    compustedURL () {
      if (!this.url) {
        return '#'
      }

      let url = this.url

      if (this.isSearchURL) {
        let keyword = this.searchKeywordTrim
        if (keyword.length > 0) {
          keyword = encodeURI(keyword)
        }
        else {
          keyword = encodeURI(`研究`)
        }
        url = url.split(this.searchKeywordPlaceholder).join(keyword)
      } 

      if (url.startsWith('COPY:')) {
        let pos = url.indexOf(':http')
        if (pos > -1) {
          return url.slice(pos + 1)
        }
        return false
      } 
      if (url.startsWith('IFRAME:')) {
        let pos = url.indexOf(':http')
        if (pos > -1) {
          return url.slice(pos + 1)
        }
        return false
      }

      return url
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
  // mounted() {
    
  // },
  methods: {
    open () {
      if (!this.url) {
        return false
      }

      let url = this.url

      if (this.isSearchURL) {
        let keyword = this.searchKeywordTrim
        if (keyword.length > 0) {
          keyword = encodeURI(keyword)
        }
        else {
          keyword = `研究`
        }
        url = url.split(this.searchKeywordPlaceholder).join(keyword)
      } 

      // utils.PopupUtils.openURLFullscreen(url)
      console.log(this.url, url.toUpperCase().startsWith('IFRAME:'))
      if (url.toUpperCase().startsWith('COPY:')) {
        let str = url.slice(5)
        utils.ClipboardUtils.copyPlainString(str)
      }
      else if (url.toUpperCase().startsWith('IFRAME:')) {
        // console.log('20230602-0939')
        // console.log(this.$parent.$parent.tab.url)
        // let str = url.slice(7)
        let str = url
        
        let pos = str.indexOf(':http')
        let id = 0
        // let url = str
        console.log(pos)
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
          console.log(id, pos, str, str.slice(pos + 1))
          url = str.slice(pos + 1)
        }
          
        console.log(id, url)

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
        console.log(this.compustedURL)
        this.utils.PopupUtils.openURLFullscreen(this.compustedURL)
      }
    }
  }
}

export default app