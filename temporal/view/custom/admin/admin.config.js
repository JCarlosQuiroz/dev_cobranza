(function() {
    'use strict';
    angular
        .module('app')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider, triMenuProvider) {
        // first create a state that your menu will point to .
        $stateProvider
        .state('triangular.reportes',{
            url: '/reportes',
            templateUrl:  'custom/admin/reportes/reportes.tmpl.html',
            controller:   'reportesController',
            controllerAs: 'vm'
        })
        // next add the menu item that points to the above state.
        triMenuProvider.addMenu({
            name: 'Reportes',
            icon: 'fa fa-bank',
            type: 'dropdown',
            priority: 1,
            children: [{
                name: 'Cobranza',
                type: 'link',
                state: 'triangular.reportes'
            }]
        });
    }
})();