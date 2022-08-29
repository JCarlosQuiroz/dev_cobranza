(function() {
    'use strict';

    angular
        .module('app.permission')
        .config(permissionConfig);

    /* @ngInject */
    function permissionConfig($stateProvider, triMenuProvider) {
        // $stateProvider
        // .state('triangular.permission', {
        //     url: '/permission',
        //     templateUrl: 'template/permission/pages/permission.tmpl.html',
        //     controller: 'PermissionController',
        //     controllerAs: 'vm',
        //     resolve: {
        //         users: ['UserService', function(UserService) {
        //             return UserService.getUser();
        //         }]
        //     },
        //     data: {
        //         layout: {
        //             contentClass: 'layout-column'
        //         }
        //     }
        // })
        // .state('triangular.permission-define', {
        //     url: '/permission/define',
        //     templateUrl: 'template/permission/pages/permission-define.tmpl.html',
        //     data: {
        //         layout: {
        //             contentClass: 'layout-column'
        //         }
        //     }
        // })
        // .state('triangular.permission-routes', {
        //     url: '/permission/routes',
        //     templateUrl: 'template/permission/pages/permission-routes.tmpl.html',
        //     data: {
        //         layout: {
        //             contentClass: 'layout-column'
        //         }
        //     }
        // })
        // .state('triangular.permission-views', {
        //     url: '/permission/views',
        //     templateUrl: 'template/permission/pages/permission-views.tmpl.html',
        //     data: {
        //         layout: {
        //             contentClass: 'layout-column'
        //         }
        //     }
        // });

        // triMenuProvider.addMenu({
        //     name: 'Permissions',
        //     icon: 'zmdi zmdi-lock',
        //     type: 'dropdown',
        //     priority: 4.1,
        //     children: [{
        //         name: 'Permissions',
        //         state: 'triangular.permission',
        //         type: 'link'
        //     },{
        //         name: 'Define Permissions & Roles',
        //         state: 'triangular.permission-define',
        //         type: 'link'
        //     },{
        //         name: 'Routes',
        //         state: 'triangular.permission-routes',
        //         type: 'link'
        //     },{
        //         name: 'Views',
        //         state: 'triangular.permission-views',
        //         type: 'link'
        //     }]
        // });
    }
})();
