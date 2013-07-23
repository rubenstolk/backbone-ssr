
/**
 * Module dependencies.
 */

var express = require('express')
  , ssr = require('./middlewares/ssr')

/**
 * Boot expressjs config
 */

exports.boot = function(public, app, config) {

  // host static files from public folder
  app.use(express.static(public))

  // logger
  app.use(express.logger(':method :url :status'))

  app.configure(function () {

    // initialize parsers
    app.use(express.cookieParser())
    app.use(express.bodyParser())
    app.use(express.methodOverride())

    // in case no middleware responded, return server side rendering of the app
    app.use(ssr.ssr(public))
  })
}
