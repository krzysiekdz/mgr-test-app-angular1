import angular from 'angular';

//loading modules

import './services/randomService.js';

import './directives/search.js';

import './filters/filter.js';

import './controllers/addCtrl.js';
import './controllers/replaceCtrl.js';
import './controllers/updateCtrl.js';
import './controllers/swapCtrl.js';
import './controllers/fetchCtrl.js';
import './controllers/rowCtrl.js';
import './controllers/searchCtrl.js';

//---------------- app -------------

var app = angular.module('app', 
	['random-serv', 'add-ctrl', 'replace-ctrl', 'update-ctrl', 'swap-ctrl', 'filter10-filter', 'fetch-ctrl', 'search-dir', 'search-ctrl', 'row-ctrl']);

var fn;
var ctrl = app.controller('mainCtrl', fn = function($scope, r) {
	$scope.model = {
		data: [],
	};

	$scope.clear = function() {
		$scope.model.data = [];
		r.resetId();
	};

});

fn.$inject = ['$scope', 'randomObjects'];

//uporządkowac menu, za pomoca dyrektyw lub widokow - tak zeby nie bylo tak duzo kodu widocznego naraz - tzn jeszcze go zrefaktorowac

