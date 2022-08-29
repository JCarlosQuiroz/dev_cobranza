(function() {
    'use strict';

	angular
		.module('app')
		.factory('homeService', ['$http','Main_API','Main_URL', function($http, Main_API,Main_URL){

			// Local Variables
			var vm = {};

			vm.getSummary = function(obj){
				// Reset Values
				Main_API.data = {},
				Main_API.url = '';

				// Set Values
				Main_API.url = Main_URL.url+'api/getSummary';
				Main_API.data = "value="+obj.ref;

				return $http(Main_API)
			}

			return vm

		}]);
})();