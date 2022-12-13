$.require = function (basePath, list) {
  if (!list) {
    list = basePath
    basePath = ''
  }
  
  if (Array.isArray(list) === false) {
    list = [list]
  }
  
  list = list.map(url => basePath + url)
  
  return new Promise((resolve) => {
    let next = (i) => {
      i++
      loop(i)
    }
    
    let loop = function (i) {
      if (i >= list.length) {
        resolve(true)
        return true
      }
      
      let url = list[i]
      
      if (url.endsWith('.js')) {
        $.getScript(url, () => {
          next(i)
        })
      }
      else if (url.endsWith('.css')) {
        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: url
        }).appendTo("head");
        next(i)
      }
      else {
        next(i)
      }
    }
    
    loop(0)
  })
}