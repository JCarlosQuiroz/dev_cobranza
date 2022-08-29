(function() {
    'use strict';

	angular
		.module('app')
		.factory('communityService', ['$http','Main_API','Main_URL', function($http, Main_API,Main_URL){

			// Local Variables
			var vm = {};

			vm.getCommunities = function(obj){
				// Reset Values
				Main_API.data = {},
				Main_API.url = '';

				// Set Values
				Main_API.url = Main_URL.url+'api/getSelect';
				Main_API.data = "name="+obj.name+"&id="+obj.id;
				return $http(Main_API)
			}

			return vm
		}]);
})();