import PanelButton from './PanelButton/PanelButton.vue'

let app = {
  props: ['config', 'localConfig', 'utils', 'routingID', 'searchButton', 'tabType', 'url'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
    }
  },
  components: {
    PanelButton
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    computedSearchPlaceholder () {
      let placeholder = this.$t(`Search...`)

      if (this.url && this.url.label) {
        placeholder = this.$(`Search`) + ' ' + this.url.label + ' ...'
      }

      return placeholder
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app