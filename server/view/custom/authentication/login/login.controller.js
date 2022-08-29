(function() {
    'use strict';

    angular
        .module('app.authentication')
        .controller('loginController', loginController);

    /* @ngInject */
    function loginController( $state, triSettings, loginService, Main_API, LogedUser, msgFactory, Success, Error) {
        var vm = this;
        vm.loading = false;
        vm.loginClick = loginClick;
        vm.triSettings = triSettings;

        // create blank user variable for login form
        vm.user = {
            name: '',
            password: ''
        };
        ////////////////

        function loginClick() {
            vm.loading = true;
            loginService.getIn(vm.user).then(function successCallback(response) {
                console.log(response)
                if(response.status == 203){
                    msgFactory.showAlert(undefined,Success.loginInvalid);
                    vm.loading = false;
                }else if(response.status == 202 && response.statusText == 'Accepted' && response.headers('traking')){
                    console.log(response)
                    Main_API.headers.traking = response.headers('traking'),
                    LogedUser.id   = response.data.Id,
                    LogedUser.name = response.data.nombre,

                    // Delete data from Main_API
                    Main_API.data  = {};
                    $state.go('triangular.reportes');
                }else{
                    vm.loading = false;
                    // Delete data from Main_API
                    Main_API.data  = {};
                    msgFactory.showAlert(undefined,Success.loginInvalid);
                }
             }, function errorCallback(response) {
                vm.loading = false;
                // Reset data from Main_API & user
                Main_API.data  = {},
                vm.user = {
                    name: '',
                    password: ''
                };
                msgFactory.showAlert(undefined,Error.systemError);
            })
        }
    }
})();
