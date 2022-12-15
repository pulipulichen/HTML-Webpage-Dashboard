import Author from './../Author/Author.vue'

let app = {
  props: ['config', 'localConfig', 'utils', 'routingID'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      dashboardConfigURL: ``,
      demoMap: {
        demo1: "./assets/settings/demo1.json",
        demo2: "./assets/settings/demo2.json",
        demo3: "./assets/settings/demo3.json",
        demo4: "./assets/settings/demo4.json",
        weather: "./assets/settings/weather.json",
      }
    }
  },
  components: {
    Author
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    }
  },
  computed: {
    demoList () {
      return Object.keys(this.demoMap).map(name => {
        return {
          name,
          value: this.demoMap[name]
        }
      })
    },
    dashboardInformation () {
      if (!this.routingID) {
        return ''
      }

      return document.title + '\t' + location.href
    },
    buttons () {
      return this.$parent.buttons
    },
    gitHubURL () {
      return 'https://pulipulichen.github.io/HTML-Webpage-Dashboard/#/' + encodeURIComponent(this.dashboardConfigURL)
    }
  },
  mounted() {
    this.dashboardConfigURL = this.routingID
  },
  methods: {
    save (url) {
      if (url) {
        this.dashboardConfigURL = url
      }
      this.$router.push('/' + encodeURIComponent(this.dashboardConfigURL))
      this.back()
    },
    back () {
      this.config.view = 'dashboard'
    },
    reload () {
      location.reload()
    },
    popupWindow (url) {
      this.utils.PopupUtils.openURLFullscreen(url)
    },
    openGithub () {
      window.open(this.gitHubURL, '_blank')
    }
  }
}

export default app