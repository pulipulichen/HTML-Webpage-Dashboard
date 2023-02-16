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

      if (this.searchButton && this.searchButton.label) {
        placeholder = $(`Search`) + ' ' + this.searchButton.label + ' ...'
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