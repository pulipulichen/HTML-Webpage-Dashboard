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
    
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default app