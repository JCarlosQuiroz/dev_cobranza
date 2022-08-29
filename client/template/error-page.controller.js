(function() {
    angular
        .module('app')
        .controller('ErrorPageController', ErrorPageController);

    /* @ngInject */
    function ErrorPageController($state,Main_API,LogedUser) {
        var vm = this;

        vm.goHome = goHome;
        vm.goLogin = goLogin;

        /////////

        function goHome() {
            $state.go('triangular.home');
        }
        function goLogin() {
            Main_API.headers.traking = '';
            LogedUser.ref  = '';
            LogedUser.type = '';
            LogedUser.id   = '';
            LogedUser.name = '';
            localStorage.clear();
            $state.go('authentication.login');
        }
    }
})();
