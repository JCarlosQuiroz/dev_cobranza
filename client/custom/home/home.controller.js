(function() {
    'use strict';
    angular
        .module('app')
        .controller('homeController', homeController);

    /* @ngInject */
    function homeController($scope,$mdDialog, $interval, homeService, CurrentCommunity, LogedUser) {
        var vm = this;
    
        
        ///////////

        function getSummary(id){
            homeService.getSummary({ref : id}).then(function successCallback(response){
                vm.summary = response.data[0];
            }, function errorCallback(response){
                console.log(response);
            })
        }
    }
})();