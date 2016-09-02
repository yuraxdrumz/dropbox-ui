(function() {
  'use strict';

  angular
    .module('eternitech')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
