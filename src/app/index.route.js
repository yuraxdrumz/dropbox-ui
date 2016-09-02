(function() {
  'use strict';

  angular
    .module('eternitech')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$translateProvider) {
    var translations = {
        "name_size":"KiloBytes",
        "name_title":"Total images size is",
        "about_page":"This is the about page!",
        "contact_page":"This is the contact page!"
    }
  $translateProvider
    .translations('en', translations)
    .preferredLanguage('en');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
        .state('about',{
            url:'/about',
            templateUrl:'app/components/about/about.html',
            controller:'aboutController',
            controllerAs:'abt'
        })
        .state('contact',{
            url:'/contact',
            templateUrl:'app/components/contact/contact.html',
            controller:'contactController',
            controllerAs:'ct'

    });

    $urlRouterProvider.otherwise('/');
  }

})();
