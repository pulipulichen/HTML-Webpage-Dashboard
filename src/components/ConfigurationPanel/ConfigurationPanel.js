import Author from './../Author/Author.vue'

let app = {
  props: ['config', 'localConfig', 'utils', 'routingID'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      dashboardConfigURL: ``
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
    dashboardInformation () {
      if (!this.routingID) {
        return ''
      }

      return document.title + '\t' + location.href
    }
  },
  mounted() {
    this.dashboardConfigURL = this.routingID
  },
  methods: {
    save () {
      this.$router.push('/' + encodeURIComponent(this.dashboardConfigURL))
      this.back()
    },
    back () {
      this.config.view = 'dashbaord'
    }
  }
}

export default app