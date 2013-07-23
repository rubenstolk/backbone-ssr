define([
  'app',
  'modules/page'
],

function(app, Page) {

  return Backbone.Router.extend({

    defaultLayout: 'main',

    routes: {
      'index': 'index',
      '*default': 'index'
    },

    index: function(route) {
      route = (route && route.replace(/_=_/g, '')) || '';

      var layout = app.useLayout('main');
      var page = new Page.Model({
        name: route
      });
      layout.setViews({
        '.body': new Page.Views.Simple({ model: page })
      });

      this.render();
    },

    go: function() {
      return this.navigate(_.toArray(arguments).join('/'), true);
    },

    render: function() {
      app.layout.render();
    },

    initialize: function() {
      return this.start && this.start();
    }
  });

});
