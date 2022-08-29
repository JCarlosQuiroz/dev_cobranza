(function() {
    'use strict';

	angular
		.module('app')
		.factory('loginService', ['$http','Main_API','Main_URL', function($http, Main_API,Main_URL){

			// Local Variables
			var vm = {};

			vm.getIn = function(obj){
				// Reset Values
				Main_API.data = {},
				Main_API.url = '';

				// Set Values
				Main_API.url = Main_URL.url+'api/login';
				Main_API.data = "pass="+obj.password+"&usuario="+obj.name;
				return $http(Main_API)
			}

			vm.getOut = function(obj){
				// Reset Values
				Main_API.data = '',
				Main_API.url = '';
				
				// Set Values
				Main_API.url = Main_URL.url+'api/logout';
				Main_API.data = "bool=true&name="+obj.name;
				return $http(Main_API)
			}

			return vm
		}]);
})();