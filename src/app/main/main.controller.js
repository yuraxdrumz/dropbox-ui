(function() {
  'use strict';

  angular
    .module('eternitech')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,getData, orderByFilter) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1472796953931;
    vm.showToastr = showToastr;
    vm.propName = "image_size";
    vm.reverse = true;
    vm.size = 0;
    activate();
    images()
    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function images(){
        getData.get().then(function(res){
            for(var i=0,len=res.data.images.length;i<len;i++){
                res.data.images[i].image_mod_date = moment(res.data.images[i].image_mod_date).fromNow();
                vm.size += res.data.images[i].image_size;
            }
            vm.images = orderByFilter(res.data.images,vm.propName,vm.reverse)
        })
    }
    vm.sortBy = function(val){
        vm.reverse = !vm.reverse;
        vm.images = orderByFilter(vm.images, val, vm.reverse)
    }
    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

  }
})();
