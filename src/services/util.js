import angular from 'angular';

angular.module('util-serv', [])
	.factory('util', function() {

	function parseNumber(val, min, max) {
	    val = Number(val);
	    if(val >= min && val <= max) {
	        return val;
	    }
	    throw "string-parse exception:" + val;
	}


	return {
		parseNumber: parseNumber
	};

});

