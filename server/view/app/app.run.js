(function() {
    'use strict';

    angular
        .module('app')
        .run(runFunction);

    /* @ngInject */
    function runFunction($rootScope, $state, $window, $timeout, $document, Main_API, LogedUser,CurrentCommunity) {
        
        
        // default redirect if access is denied
        function redirectError() {
            $state.go('500');
        }

        // watchers

        // redirect all errors to permissions to 500
        var errorHandle = $rootScope.$on('$stateChangeError', redirectError);

        // remove watch on destroy
        $rootScope.$on('$destroy', function() {
            errorHandle();
        });
        // Help-Security
        // $rootScope.$on('$stateChangeSuccess', function() {
        //     setTimeout(function(){
        //         if(typeof Main_API.headers.traking == 'undefined'){
        //             $state.go('authentication.login');
        //         }
        //     },1000);
        // });

        // Timeout timer value
        // var TimeOutTimerValue = 10000;

        // Start a timeout
        // var TimeOut_Thread = $timeout(function(){ LogoutByTimer() } , TimeOutTimerValue);
        // var bodyElement = angular.element($document);

        // angular.forEach(['keydown', 'keyup', 'click', 'mousemove', 'DOMMouseScroll', 'mousewheel', 'mousedown', 'touchstart', 'touchmove', 'scroll', 'focus'], 
        // function(EventName) {
             // bodyElement.bind(EventName, function (e) { TimeOut_Resetter(e) });  
        // });

        // function LogoutByTimer(){
            // console.log('Logout');
            /////////////////////////////////////////////////
            // redirect to another page(eg. Login.html) here
            /////////////////////////////////////////////////
        // }

        // function TimeOut_Resetter(e){
        //     console.log(' ' + e);

        //     /// Stop the pending timeout
        //     $timeout.cancel(TimeOut_Thread);

        //     /// Reset the timeout
        //     TimeOut_Thread = $timeout(function(){ LogoutByTimer() } , TimeOutTimerValue);
        // }
        // Help-Security

        if($window.localStorage.getItem('t') && $window.localStorage.getItem('u')){
            Main_API.headers.traking = window.localStorage.getItem('t');
            LogedUser.id = window.localStorage.getItem('i');
            LogedUser.name = window.localStorage.getItem('u');
            CurrentCommunity.data.name = window.localStorage.getItem('ca');

            localStorage.clear();
        }
        if(Main_API.headers.traking == '' || Main_API.headers.traking == undefined || Main_API.headers.traking == 'undefined' || Main_API.headers.traking == null){
            $state.go('authentication.login');
        }

        if($state.$current.url.source != '#/login' || $state.$current.url.source != '#/500' || $state.$current.url.source != '#/401' || $state.$current.url.source != '#/404'){
            $(window).bind('beforeunload', function() {
                if(Main_API.headers.traking != 'undefined' || Main_API.headers.traking != undefined){
                    window.localStorage.setItem('t', Main_API.headers.traking);
                    window.localStorage.setItem('u', LogedUser.name);
                    window.localStorage.setItem('i', LogedUser.id);
                    window.localStorage.setItem('ca', CurrentCommunity.data.name);
                }
                return 'Puedes perder información, ¿seguro que quieres salir?';
            });
        }else{
            localStorage.clear();
        }
    }
})();
