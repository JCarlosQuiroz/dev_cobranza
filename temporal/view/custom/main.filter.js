(function(){
	'use strict';

	angular
		.module('app')
		.filter('dateRange', function() {
            return function(items, startDate, endDate) {
                var retArray = [];
                if (!startDate && !endDate) {
                    return items;
                }
                angular.forEach(items, function(obj){
                    var receivedDate = obj.payDate;        
                    if(moment(receivedDate).isAfter(startDate) && moment(receivedDate).isBefore(endDate)) {
                        retArray.push(obj);
                    }
                });
                return retArray;
            }
        });
})();