(function($,Drupal, Modernizr) {
  'use strict';

  Drupal.behaviors.retroEmoji = {
    attach: function(context) {

      $(context).once('retroEmoji').on('onload', function () {
        if (Modernizr.emoji) {
          alert('🎉');
        } else {
          console.log('no emoji for you');
        }
      });

    }
  }

})(jQuery ,Drupal, Modernizr);

