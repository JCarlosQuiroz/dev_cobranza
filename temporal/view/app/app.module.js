(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'triangular',
            'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial',
            // custom
            'ngIdle',
            'googlechart', 'chart.js', 'linkify', 'ui.calendar', 'angularMoment', 'textAngular', 'uiGmapgoogle-maps', 'hljs', 'md.data.table', angularDragula(angular), 'ngFileUpload', 'nvd3',

            'app.translate',
            // only need one language?  if you want to turn off translations
            // comment out or remove the 'app.translate', line above
            'app.permission',
            
            // dont need permissions?  if you want to turn off permissions
            // comment out or remove the 'app.permission', line above
            // also remove 'permission' from the first line of dependencies
            // https://github.com/Narzerus/angular-permission see here for why
            // uncomment above to activate the example seed module
            // 'seed-module',

            'angular-js-xlsx',

            'app.examples'
        ])

        // set a constant for the API we are connecting to
        .constant('API_CONFIG', {
            'url':  'http://triangular-api.oxygenna.com/'
        });
})();
