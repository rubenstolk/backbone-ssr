define([
  'boilerplate/initialize',
  'app',
  'router',
], function(initialize, app, router) {

  app = initialize(app);
  app.start(router, { alwaysReload: true });

});
