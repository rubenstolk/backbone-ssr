define([
  'app'
],

function(app) {

  var Page = Backbone.Module();

  Page.Model = Backbone.Model.extend({});

  Page.Collection = Backbone.Collection.extend({});

  Page.Views.Simple = Backbone.View.extend({
    template: 'page/simple',
    tagName: 'div'
  });

  return Page;

});
