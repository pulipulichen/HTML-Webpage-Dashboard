let app = {
  props: ['config', 'localConfig', 'utils', 'routingID'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      searchButtons: []
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    searchButtons (search) {
      console.log(search)
      if (!this.localConfig.searchButtons[this.routingID]) {
        this.localConfig.searchButtons[this.routingID] = {}
      }

      this.localConfig.searchButtons[this.routingID][this.localConfig.tab] = search

      console.log(this.localConfig.searchButtons)
      this.$parent.$parent.saveToLocalStorage()
    }
  },
  computed: {
    tab () {
      return this.$parent.tab
    },
    urlList () {
      return this.$parent.urlList
    }
  },
  mounted() {
    this.loadSearchKeywords()
  },
  methods: {
    loadSearchKeywords () {
      let searchButtons = this.localConfig.searchButtons[this.routingID]

      if (!searchButtons) {
        return []
      }

      let search = searchButtons[this.localConfig.tab]
      if (!search) {
        return []
      }

      return search
    },
    parsePos (pos) {
      let y = 0
      if (['1', '2', '3', '4'].indexOf(pos) > -1) {
        y = 0
      }
      else if (['q', 'w', 'e', 'r'].indexOf(pos) > -1) {
        y = 1
      }
      else if (['a', 's', 'd', 'f'].indexOf(pos) > -1) {
        y = 2
      }
      else if (['z', 'x', 'c', 'v'].indexOf(pos) > -1) {
        y = 3
      }

      let x = 0
      if (['1', 'q', 'a', 'z'].indexOf(pos) > -1) {
        x = 0
      }
      else if (['2', 'w', 's', 'x'].indexOf(pos) > -1) {
        x = 1
      }
      else if (['3', 'e', 'd', 'c'].indexOf(pos) > -1) {
        x = 2
      }
      else if (['4', 'r', 'f', 'v'].indexOf(pos) > -1) {
        x = 3
      }

      return {
        x, y
      }
    },
    parseRow (type) {
      return this.parsePos(type[0]).y
    },
    parseCol (type) {
      return this.parsePos(type[0]).x
    },
    parseWidth (type) {
      return (1 + this.parsePos(type[1]).x - this.parsePos(type[0]).x)
    },
    parseHeight (type) {
      // console.log(type, this.parsePos(type[1]), this.parsePos(type[0]))
      return (1 + this.parsePos(type[1]).y - this.parsePos(type[0]).y)
    },
    filterButtons (buttons, search) {
      let output = []

      let titles = Object.keys(buttons)
      
      if (search && search.trim() !== '') {
        titles = titles.filter(t => {
          let parts = search.split(' ')

          for (let i = 0; i < parts.length; i++) {
            if (t.indexOf(parts[i]) !== -1) {
              return true
            }
          }
          return false
        })
      }

      return titles.map(t => {
        return {
          title: t,
          url: buttons[t]
        }
      })
    }
  }
}

export default app