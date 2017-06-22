import angular from 'angular';

//loading modules

import './services/randomService.js';
import './services/util.js';

import './directives/search.js';
import './directives/filter.js';

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
	['random-serv', 'add-ctrl', 'replace-ctrl', 'update-ctrl', 'swap-ctrl', 'filter10-filter', 'fetch-ctrl', 'search-dir', 'filter10-dir', 'search-ctrl', 'row-ctrl', 'util-serv']);

app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);

var fn;
var ctrl = app.controller('mainCtrl', fn = function($scope, r) {
	$scope.model = {
		data: [],
		inputSearch: ""
	};

	$scope.views = {
		menu: {
			head: 'menu/header',
			init: 'menu/init',
			add: 'menu/add',
			replace: 'menu/replace',
			update: 'menu/update',
			swap: 'menu/swap',
			filter: 'menu/filter',
			fetch: 'menu/fetch',
			input: 'menu/input',
			edit: 'menu/edit',	
			search: 'menu/search'
		},
		table: 'table/table'
	}

	$scope.view = function(v) {
		return '../src/views/' + v + '.html';
	}

	$scope.clear = function() {
		$scope.model.data = [];
		r.resetId();
	};

});

fn.$inject = ['$scope', 'randomObjects'];

