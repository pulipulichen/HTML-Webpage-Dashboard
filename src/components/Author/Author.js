import authorImageURL from './author.png'

let StyleConfig = {
  props: ['config', 'utils', 'localConfig'],
  data() {    
    this.$i18n.locale = this.config.locale
    return {
      authorImageURL
    }
  },
//  components: {
//  },
  // computed: {
  // },
  // watch: {
  // },
  // mounted() {
  // },
  // methods: {
  // } // methods
}

export default StyleConfig