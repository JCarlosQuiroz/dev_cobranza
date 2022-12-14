(function() {
    'use strict';

    angular
        .module('app')
        .run(permissionRun);

    /* @ngInject */
    function permissionRun($rootScope, $cookies, $state, PermissionStore, RoleStore, UserService) {
        // normally this would be done at the login page but to show quick
        // demo we grab username from cookie and login the user
        var cookieUser = $cookies.get('tri-user');
        if(angular.isDefined(cookieUser)) {
            UserService.login(cookieUser);
            console.log(UserService.login(cookieUser))
        }

        // create permissions and add check function verify all permissions
        var permissions = ['viewAdmin', 'viewBlog', 'viewSpaces', 'viewUsers', 'viewConfig'];
        PermissionStore.defineManyPermissions(permissions, function (permissionName) {
            return UserService.hasPermission(permissionName);
        });

        // create roles for app
        RoleStore.defineManyRoles({
            'SUPERADMIN': ['viewAdmin', 'viewBlog', 'viewSpaces', 'viewUsers', 'viewConfig'],
            'ADMIN': [],
            'USER': [],
            'ANONYMOUS': []
        });


        ///////////////////////

        // default redirect if access is denied
        function accessDenied() {
            $state.go('401');
        }

        // watches

        // redirect all denied permissions to 401
        var deniedHandle = $rootScope.$on('$stateChangePermissionDenied', accessDenied);

        // remove watch on destroy
        $rootScope.$on('$destroy', function() {
            deniedHandle();
        });
    }
})();
