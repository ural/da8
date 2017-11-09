(function (Drupal) {
  'use strict';

  Drupal.behaviors.siteNameChange = {
    attach: function (context) {

// Override the default implementation of Drupal.theme.placeholder with our
      // own custom one.
      Drupal.theme.placeholder = function (str) {
        return '<span class="friendly-placeholder">' + Drupal.checkPlain(str) + '</span>';
      };

      // If we have a nice user name, let's replace the
      // site name with a greeting.
      if (drupalSettings.friendly.name) {
        var siteName = document.getElementsByClassName('site-branding__name')[0];
        siteName.getElementsByTagName('a')[0].innerHTML = '<h1>Howdy, ' + Drupal.theme('placeholder', drupalSettings.friendly.name) + '!</h1>';
      }

    }
  }

})(Drupal);