(function() {
    'use strict';

    angular
        .module('app.permission')
        .factory('UserService', UserService);

    /* @ngInject */
    function UserService($q, $http, RoleStore,LogedUser,Main_API) {
        var currentUser = {};
        // console.log(Main_API.headers.traking)
        Main_API.headers.traking != undefined?
        currentUser = {
            displayName: LogedUser.name,
            username: 'izual',
            avatar: LogedUser.avatar,
            roles: []
        } : 
        currentUser = {
            displayName: 'Roberto',
            username: 'izual',
            avatar: 'assets/images/avatars/avatar-1.png',
            roles: ['SUPERADMIN']
        };

        var service = {
            getCurrentUser: getCurrentUser,
            getUsers: getUsers,
            hasPermission: hasPermission,
            login: login
        };

        return service;

        ///////////////

        function getCurrentUser() {
            return currentUser;
        }

        function getUsers() {
            return $http.get('template/permission/data/users.json');
        }
        function getUser(){
            return 1
        }

        function hasPermission(permission) {
            var deferred = $q.defer();
            var hasPermission = false;

            // check if user has permission via its roles
            angular.forEach(currentUser.roles, function(role) {
                // console.log(role)
                // check role exists
                if(RoleStore.hasRoleDefinition(role)) {
                    // get the role
                    var roles = RoleStore.getStore();

                    if(angular.isDefined(roles[role])) {
                        // check if the permission we are validating is in this role's permissions
                        if(-1 !== roles[role].validationFunction.indexOf(permission)) {
                            hasPermission = true;
                        }
                    }
                }
            });

            // if we have permission resolve otherwise reject the promise
            if(hasPermission) {
                deferred.resolve();
            }
            else {
                deferred.reject();
            }

            // return promise
            return deferred.promise;
        }

        function login(username) {
            // you would replace the code below with a call you your API
            // request all users
            return getUsers()
            .then(function successCallback(response) {
                var returnUser = getCurrentUser();
                angular.forEach(response.data, function(user) {
                    if(user.username === username) {
                        returnUser = user;
                        currentUser = user;
                    }
                });
                return returnUser;
            });
        }
    }
})();
