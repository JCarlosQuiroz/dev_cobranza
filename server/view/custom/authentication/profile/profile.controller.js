(function() {
    'use strict';

    angular
        .module('app.authentication')
        .controller('ProfileController', ProfileController);

    /* @ngInject */
    function ProfileController() {
        var vm = this;
        vm.settingsGroups = [{
            name: 'Account Settings',
            settings: [{
                title: 'Show my location',
                icon: 'zmdi zmdi-pin',
                enabled: true
            },{
                title: 'Show my avatar',
                icon: 'zmdi zmdi-face',
                enabled: false
            },{
                title: 'Send me notifications',
                icon: 'zmdi zmdi-notifications-active',
                enabled: true
            }]
        },{
            name: 'Chat Settings',
            settings: [{
                title: 'Show my username',
                icon: 'zmdi zmdi-account',
                enabled: true
            },{
                title: 'Make my profile public',
                icon: 'zmdi zmdi-account-box',
                enabled: false
            },{
                title: 'Allow cloud backups',
                icon: 'zmdi zmdi-cloud-upload',
                enabled: true
            }]
        }];
        vm.user = {
            name: 'Juan Carlos Velazquez Quiroz',
            email: 'carlos-quiroz@outlook.xom',
            location: 'Culiacán, Sinaloa, México',
            website: '',
            // twitter: 'oxygenna',
            bio: 'Im just a normal guy with feelings..',
            current: '',
            password: '',
            confirm: ''
        };
    }
})();