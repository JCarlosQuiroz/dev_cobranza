(function(){
	'use strict';

	angular
		.module('app')

		.factory('msgFactory',['$mdDialog','$mdToast', function($mdDialog,$mdToast){
			var vm = {};

			vm.showAlert = function(ev,json){
				return $mdDialog.show(
	                $mdDialog.alert()
	                .parent(angular.element(document.querySelector('#popupContainer')))
	                .clickOutsideToClose(true)
	                .title(json.title)
	                .textContent(json.text)
	                .ariaLabel('Alert Dialog')
	                .ok(json.btnText)
	                .targetEvent(ev)
	            )
			}
			vm.showToast = function(text){
				return $mdToast.show(
	              $mdToast.simple()
	                .textContent(text)
	                .position('right')
	                .hideDelay(2000)
	            );
			}
			return vm
		}]);
})();