(function() {
    'use strict';

    angular
        .module('app.authentication')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('authentication', {
            abstract: true,
            views: {
                'root': {
                    templateUrl: 'custom/authentication/layouts/authentication.tmpl.html'
                }
            }
        })
        .state('authentication.login', {
            url: '/login',
            templateUrl: 'custom/authentication/login/login.tmpl.html',
            controller: 'loginController',
            controllerAs: 'vm'
        })
        // .state('authentication.signup', {
        //     url: '/signupAut',
        //     templateUrl: 'custom/authentication/signup/signup.tmpl.html',
        //     controller: 'SignupController',
        //     controllerAs: 'vm'
        // })
        .state('authentication.lock', {
            url: '/lock',
            templateUrl: 'custom/authentication/lock/lock.tmpl.html',
            controller: 'LockController',
            controllerAs: 'vm'
        })
        .state('authentication.communitySelect', {
            url: '/communitySelect',
            templateUrl: 'custom/authentication/community/community.tmpl.html',
            controller: 'communityController',
            controllerAs: 'vm'
        })
        .state('triangular.profile', {
            url: '/profile',
            templateUrl: 'custom/authentication/profile/profile.tmpl.html',
            controller: 'ProfileController',
            controllerAs: 'vm'
        });

        // triMenuProvider.addMenu({
        //     name: 'Authentication',
        //     icon: 'zmdi zmdi-account',
        //     type: 'dropdown',
        //     priority: 4.1,
        //     permission: 'viewAuthentication',
        //     children: [{
        //         name: 'Login',
        //         state: 'authentication.login',
        //         type: 'link'
        //     },{
        //         name: 'Sign Up',
        //         state: 'authentication.signup',
        //         type: 'link'
        //     },{
        //         name: 'Forgot Password',
        //         state: 'authentication.forgot',
        //         type: 'link'
        //     },{
        //         name: 'Lock Page',
        //         state: 'authentication.lock',
        //         type: 'link'
        //     },{
        //         name: 'Profile',
        //         state: 'triangular.profile',
        //         type: 'link'
        //     }]
        // });
    }
})();
