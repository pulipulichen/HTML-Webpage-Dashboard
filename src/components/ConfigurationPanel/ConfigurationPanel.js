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
    
  },
  mounted() {
    this.dashboardConfigURL = this.routingID
  },
  beforeDestroy () {
    this.$router.push('/' + this.dashboardConfigURL)
  },
  methods: {
    
  }
}

export default app