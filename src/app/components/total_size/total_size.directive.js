(function() {
  'use strict';

  angular
    .module('eternitech')
    .directive('totalSize', total_size);

  /** @ngInject */
  function total_size() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/total_size/total_size.html',
      scope: {
          size:'='
      },
      controller: totalController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function totalController() {



    }
  }

})();
