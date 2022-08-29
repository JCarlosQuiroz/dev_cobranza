(function() {
    'use strict';
	
		angular
	        .module('app')
	        .config(idleConfig);

	    function idleConfig(IdleProvider, KeepaliveProvider){
			// IdleProvider.idle(5); // 10 minutes idle
			// IdleProvider.timeout(1); // after 30 seconds idle, time the user out
			// KeepaliveProvider.interval(5); // 5 minute keep-alive ping
	    }
    }
})();