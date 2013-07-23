/* Jip.io server entry point */

require('express-namespace')

var env = process.env.NODE_ENV || 'development'
  , port = process.env.PORT || 4000
  , express = require('express')
  , fs = require('fs')
  , config = require('./config/config')[env]
  , app = express()
  , dirs = {
      public: __dirname + '/public/'
  }

// bootstrap express app
require('./config/express').boot(dirs.public, app, config)

// Start the app
app.listen(port)
console.log('\033[36m✔\u001b[0m Your server started on port ' + port)

// expose
exports = module.exports = app
