define([
  'jquery',
  'bootstrap'
],

function($) {

  if(!/mobile/i.test(navigator.userAgent)) {
    $('body').tooltip({
      selector: '[rel=tooltip]',
      container: 'body'
    });
  }

});
