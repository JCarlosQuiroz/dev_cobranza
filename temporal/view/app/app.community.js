(function(){
	'use strict';

	angular
		.module('app')
		// Desarrollo
		.constant('CurrentCommunity',{
		 	'data' : {
		 		'name':'Solecorp'
		 	}
		});
		// Productivo
		// .constant('CurrentCommunity',{
		// 	'data' : {
		// 		'id':'',
		// 		'name':'',
		// 		'length':'',
		// 		'latitude':'',
		// 		'address':'',
		// 		// 'houses':'',
		// 		'country':'',
		// 		'state':'',
		// 		'county':'',
		// 		// 'status':''
		// 	}
		// });
})();