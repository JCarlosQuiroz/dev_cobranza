(function() {
    'use strict';

    angular
        .module('app.examples.extras')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.extra-gallery', {
            url: '/extras/gallery',
            templateUrl: 'template/examples/extras/gallery.tmpl.html',
            controller: 'GalleryController',
            controllerAs: 'vm'
        })
        .state('triangular.extra-avatars', {
            url: '/extras/avatars',
            templateUrl: 'template/examples/extras/avatars.tmpl.html',
            controller: 'AvatarsController',
            controllerAs: 'vm'
        })
        .state('triangular.extra-blank', {
            url: '/extras/blank',
            templateUrl: 'template/examples/extras/blank.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.extra-timeline', {
            url: '/extras/timeline',
            templateUrl: 'template/examples/extras/timeline.tmpl.html',
            controller: 'TimelineController',
            controllerAs: 'vm'
        });

        // triMenuProvider.addMenu({
        //     name: 'Extras',
        //     icon: 'zmdi zmdi-view-list-alt',
        //     type: 'dropdown',
        //     priority: 8.1,
        //     children: [{
        //         name: 'Gallery',
        //         state: 'triangular.extra-gallery',
        //         type: 'link'
        //     },{
        //         name: 'Avatars',
        //         state: 'triangular.extra-avatars',
        //         type: 'link'
        //     },{
        //         name: '404 Page',
        //         state: '404',
        //         type: 'link'
        //     },{
        //         name: '500 Page',
        //         state: '500',
        //         type: 'link'
        //     },{
        //         name: 'Blank Page',
        //         state: 'triangular.extra-blank',
        //         type: 'link'
        //     },{
        //         name: 'Timeline',
        //         state: 'triangular.extra-timeline',
        //         type: 'link'
        //     }]
        // });
    }
})();
