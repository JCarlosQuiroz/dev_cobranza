(function() {
    'use strict';

    angular
        .module('app.authentication')
        .controller('communityController', communityController);

    /* @ngInject */
    function communityController($scope, $state, $mdToast, $filter, $http, CurrentCommunity, triSettings,Main_API,communityService,LogedUser) {
        var vm = this;
        vm.triSettings = triSettings;
        vm.communities = [];
        communityService.getCommunities(LogedUser).then(function successCallback(response) {
            if(response.status == 203){
                msgFactory.showAlert(undefined,Success.loginInvalid);
            }else if(response.status == 202 && response.statusText == 'Accepted'){
               vm.communities = response.data;
                // Delete data from Main_API
                Main_API.data  = {};
            }else{
                // Delete data from Main_API
                Main_API.data  = {};
                msgFactory.showAlert(undefined,Success.loginInvalid);
            }
         }, function errorCallback(response) {
                // Reset data from Main_API & user
                Main_API.data  = {};
                msgFactory.showAlert(undefined,Error.systemError);
        });
        function goHome(){
            if(vm.community != ''){
                for(var i = 0;i<vm.communities.length;i++){
                    if(vm.communities[i].id == vm.community){
                        CurrentCommunity.data = vm.communities[i];
                        $state.go('triangular.home');
                    }
                }
            }
            else{
                msgFactory.showAlert(undefined,{'systemError'  : {
                    'title'   : 'Ups',
                    'text'    : 'Parece que no has seleccionado una privada',
                    'btnText' : 'Entendido'}
                });
                $('#SelectCommunity').focus();
            }
            
        }
        vm.goHome = goHome;
    }
})();
