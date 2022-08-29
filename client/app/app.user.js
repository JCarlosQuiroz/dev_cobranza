(function(){
	'use strict'
	angular
		.module('app')
		// Production
		.constant('LogedUser',{
			'id'    : '',
			'name'  : '',
			'avatar': 'assets/images/avatars/avatar-5.png'
		});
		// Development
		// .constant('LogedUser',{
		// 	'id'      : '2',
		// 	'name'    : 'Roberto',
		// 	'avatar'  : 'assets/images/avatars/avatar-5.png'
		// });
})();