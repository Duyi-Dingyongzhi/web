var path = require('path')
module.exports = {
       entry:'./web.js',
       output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.server.js'
    }
  }
