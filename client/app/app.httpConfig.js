(function() {
	'use strict';

	angular
		.module('app')
		// default value for httpMethod PRODUCTION
        .constant('Main_API',{
            'method'  : 'POST',
            'url'     : '',
            'headers' : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            'data'    : {}
        })
        // Main API Developer
        // .constant('Main_API',{
        //     'method'  : 'POST',
        //     'url'     : '',
        //     'headers' : {
        //         'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        //         'traking'      : '030740426140870n1s89g01sms3vhjais02j4i0dem9ewr1fk54cr3srgb5fusorhrvcibwxyjigsowpi'
        //     },
        //     'data'    : {}
        // })
        // development
        .constant('Main_URL',{
            'url' : 'http://localhost:8080/'
        });
        // production
        // .constant('Main_URL',{
        //     'url' : 'http://192.169.164.193:8080/'
        // });
})();