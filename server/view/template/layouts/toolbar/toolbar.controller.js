(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('ToolbarController', DefaultToolbarController);

    /* @ngInject */
    function DefaultToolbarController(
            $scope,
            $injector,
            $rootScope,
            $mdMedia,
            $state,
            $element,
            $filter,
            $mdUtil,
            $mdSidenav,
            $mdToast,
            $timeout,
            $document,
            $window,
            triBreadcrumbsService,
            triSettings,
            triLayout,
            LogedUser,
            Main_API,
            loginService,
            CurrentCommunity,
            msgFactory,
            Success)
    {
        var vm = this;
        vm.breadcrumbs = triBreadcrumbsService.breadcrumbs,
        vm.emailNew = false,
        vm.languages = triSettings.languages,
        vm.openSideNav = openSideNav,
        vm.hideMenuButton = hideMenuButton,
        // vm.switchLanguage = switchLanguage;
        vm.toggleNotificationsTab = toggleNotificationsTab,
        vm.logOut = logOut,
        vm.isFullScreen = false,
        vm.fullScreenIcon = 'zmdi zmdi-fullscreen',
        vm.toggleFullScreen = toggleFullScreen,
        vm.currentUser = LogedUser;
        

        ////////////////

        function openSideNav(navID) {
            $mdUtil.debounce(function(){
                $mdSidenav(navID).toggle();
            }, 300)();
        }

        // function switchLanguage(languageCode) {
        //     if($injector.has('$translate')) {
        //         var $translate = $injector.get('$translate');
        //         $translate.use(languageCode)
        //         .then(function() {
        //             $mdToast.show(
        //                 $mdToast.simple()
        //                 .content($filter('triTranslate')('Language Changed'))
        //                 .position('bottom right')
        //                 .hideDelay(500)
        //             );
        //             $rootScope.$emit('changeTitle');
        //         });
        //     }
        // }

        function hideMenuButton() {
            switch(triLayout.layout.sideMenuSize) {
                case 'hidden':
                    // always show button if menu is hidden
                    return false;
                case 'off':
                    // never show button if menu is turned off
                    return true;
                default:
                    // show the menu button when screen is mobile and menu is hidden
                    return $mdMedia('gt-sm');
            }
        }

        function toggleNotificationsTab(tab) {
            $rootScope.$broadcast('triSwitchNotificationTab', tab);
            vm.openSideNav('notifications');
        }

        function toggleFullScreen() {
            vm.isFullScreen = !vm.isFullScreen;
            vm.fullScreenIcon = vm.isFullScreen ? 'zmdi zmdi-fullscreen-exit':'zmdi zmdi-fullscreen';
            // more info here: https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
            var doc = $document[0];
            if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement ) {
                if (doc.documentElement.requestFullscreen) {
                    doc.documentElement.requestFullscreen();
                } else if (doc.documentElement.msRequestFullscreen) {
                    doc.documentElement.msRequestFullscreen();
                } else if (doc.documentElement.mozRequestFullScreen) {
                    doc.documentElement.mozRequestFullScreen();
                } else if (doc.documentElement.webkitRequestFullscreen) {
                    doc.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (doc.exitFullscreen) {
                    doc.exitFullscreen();
                } else if (doc.msExitFullscreen) {
                    doc.msExitFullscreen();
                } else if (doc.mozCancelFullScreen) {
                    doc.mozCancelFullScreen();
                } else if (doc.webkitExitFullscreen) {
                    doc.webkitExitFullscreen();
                }
            }
        }
        function logOut(){
            console.log('cerrando sesion')
            loginService.getOut({key:Main_API.headers.traking,name:LogedUser.name}).then(function successCallback(response) {
                if(response.status == 203){
                    Main_API.headers.traking = '';
                    LogedUser.ref  = '';
                    LogedUser.type = '';
                    LogedUser.id   = '';
                    LogedUser.name = '';
                    localStorage.clear();
                    $state.go('authentication.login');
                }else if(response.status == 202 && response.statusText == 'Accepted' && response.headers('traking')){
                    Main_API.headers.traking = '';
                    LogedUser.ref  = '';
                    LogedUser.type = '';
                    LogedUser.id   = '';
                    LogedUser.name = '';
                    localStorage.clear();
                    $state.go('authentication.login');
                }else{
                    Main_API.headers.traking = '';
                    LogedUser.ref  = '';
                    LogedUser.type = '';
                    LogedUser.id   = '';
                    LogedUser.name = '';
                    localStorage.clear();
                    $state.go('authentication.login');
                }
             }, function errorCallback(response) {
                Main_API.headers.traking = '';
                LogedUser.ref  = '';
                LogedUser.type = '';
                LogedUser.id   = '';
                LogedUser.name = '';
                localStorage.clear();
                $state.go('authentication.login');
            })
        }
        $scope.$on('newMailNotification', function(){
            vm.emailNew = false;
        });

        if(Main_API.headers.traking == '' || Main_API.headers.traking == undefined || Main_API.headers.traking == 'undefined' || Main_API.headers.traking == null){
            $state.go('authentication.login');
        }
        // Help-Security

        // if($window.localStorage.getItem('t') && $window.localStorage.getItem('u')){
        //     Main_API.headers.traking = window.localStorage.getItem('t');
        //     LogedUser.id = window.localStorage.getItem('i');
        //     LogedUser.name = window.localStorage.getItem('u');
        //     CurrentCommunity.data.name = window.localStorage.getItem('ca');

        //     localStorage.clear();
        // }
        // if(!Main_API.headers.traking || Main_API.headers.traking == '' || Main_API.headers.traking == undefined || Main_API.headers.traking == 'undefined' || Main_API.headers.traking == null){
        //     $state.go('500');
        // }

        // if($state.$current.url.source != '#/login' || $state.$current.url.source != '#/500' || $state.$current.url.source != '#/401' || $state.$current.url.source != '#/404'){
        //     $(window).bind('beforeunload', function() {
        //         if(Main_API.headers.traking != 'undefined' || Main_API.headers.traking != undefined){
        //             window.localStorage.setItem('t', Main_API.headers.traking);
        //             window.localStorage.setItem('u', LogedUser.name);
        //             window.localStorage.setItem('i', LogedUser.id);
        //             window.localStorage.setItem('ca', CurrentCommunity.data.name);
        //         }
        //         return 'Puedes perder información, ¿seguro que quieres salir?';
        //     });
        // }else{
        //     localStorage.clear();
        // }
    }
})();
