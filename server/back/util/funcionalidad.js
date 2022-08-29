'use strict';
function armarQuery(long,string){
	var query_start = "CALL "+string+"(",
		query_mid = "",
		query_end = ");";
	for(var i = 0;i<long;i++){
		i == 0 ?
			query_mid = "?" :
			query_mid = query_mid+",?";
	}
	var finalQuery = query_start+query_mid+query_end;
	return finalQuery;
}

exports.armarQuery = armarQuery;