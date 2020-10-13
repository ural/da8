(function($) {
  'use strict';

  Drupal.behaviors.testFunc = {
    attach: function (context, settings) {

        $('.page-title', context).once('testFunc').on('click', function () {
          alert(Drupal.t('OKIE-DOKIE'));
        })

    }
  };
})(jQuery);

