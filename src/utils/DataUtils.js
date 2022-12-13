export default {
  sleep: function (ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  isMissingData: function (data) {
    return (data === '?' || data === null || data === undefined)
  },
  parseNumber: async function (value) {
    if (Array.isArray(value)) {
      let ary = []
      for (let len = value.length, i  = len; i > 0; i--) {
        let index = (len - i)
        ary.push(await this.parseNumber(value[index]))
        
        if (i % 5000 === 2500) {
          //console.log('parseNumber', i)
          await this.sleep()
        }
      }
      
      return ary
    }
    
    if (this.isMissingData(value)) {
      return value
    }
    
    if (typeof value === 'string' && value !== '' && !isNaN(value)) {
      return Number(value)
    }
    else {
      return value
    }
  }
}