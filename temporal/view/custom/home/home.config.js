(function() {
    'use strict';
    angular
        .module('app')
        .config(routeConfig);
    /* @ngInject */
    function routeConfig($stateProvider, triMenuProvider) {
        // first create a state that your menu will point to .
        $stateProvider
        .state('triangular.home',{
            url: '/home',
            templateUrl: 'custom/home/home.tmpl.html',
            controller: 'homeController',
            controllerAs: 'vm'
        });
        // next add the menu item that points to the above state.
        triMenuProvider.addMenu({
            name: 'Inicio',
            icon: 'zmdi zmdi-home',
            type: 'link',
            priority: 1,
            state: 'triangular.home'
        });
    }
})();