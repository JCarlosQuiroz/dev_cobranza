(function() {
    'use strict';
    angular
        .module('app')
        .config(routeConfig);
    /* @ngInject */
    function routeConfig($stateProvider, triMenuProvider) {
    
        triMenuProvider.addMenu({
            type: 'divider',
            priority: 1.2
        });
    }
})();