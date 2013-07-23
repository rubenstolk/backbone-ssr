define(['jquery', 'backbone'],

function() {

  $.ajaxSetup({
    cache: false
  });

  // Backbone global settings
  Backbone.Model.prototype.idAttribute = '_id';

  Backbone.Model.prototype.initialize = Backbone.Collection.prototype.initialize = function(options) {
    this.options = options || {};
  };

  Backbone.View.prototype.serialize = function() {
    var result = {
      currentUser: app.user,
      texts: app.texts
    };
    if(this.model) {
      result.model = this.model.toJSON ? this.model.toJSON() : this.model;
    }
    if(this.collection && this.collection.toJSON) {
      result.collection = this.collection.toJSON();
    }
    if(this.renderAttributes) {
      result = _.extend(result, this.renderAttributes());
    }
    return result;
  };

  var app = {
    name: 'My app',
    version: '1.0',
    el: '#main',
    root: '/',
    baseUrl: '/api/v1/',
    prefix: 'app/templates/',
    switchLayout: function(oldLayout, newLayout) {
      var html = $('html'),
          old = $(app.el).find('> *').not(newLayout.el),
          clean = function() {
            return [
              app.phone && window.scrollTo(0, app.android ? 1 : 0),
              !app.mobile && _.defer(function() {
                newLayout.$el.find('textarea, :text').not('.dummy, .feedback').first().focus();
              }),
              oldLayout && html.removeClass(oldLayout.options.classNames) && oldLayout.remove(),
              old && old.remove(),
              $(window).trigger('afterRender')
            ];
          };

      html.removeClass('landing');

      if(oldLayout) {
        html.removeClass(oldLayout.options.name);
        old.css('opacity', 0).find('> .navbar, > .main-content > .menu, .logo').css({ visibility: 'hidden' });
        _.delay(clean, app.loadingDelay || 0);
        newLayout.$el.css('opacity', 1);
      }
      else {
        clean();
      }

      html.addClass(newLayout.options.name).addClass(newLayout.options.classNames);
      newLayout.$el.prependTo('#main');
    }
  };

  var appName = 'app';
  window[appName] = app;

  return app;

});
