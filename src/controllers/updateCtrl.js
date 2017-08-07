import angular from 'angular';

angular.module('update-ctrl', [])
	.controller('updateCtrl', ['$scope', 'randomObjects', 'util',  function($scope, r, util) {

		$scope.count = '';
		$scope.every = '';
		var min = 1, max = 5000;

		$scope.updateFirst = function(count) {
			count = util.parseNumber(count, min, max);
			var data = $scope.model.data;
			if(data.length >= count) {
				var newData = r.randomObjects(count);
				for(var i = 0; i < count; i++) {
					update(data[i], newData[i]);
				}
			} 
		}

		$scope.updateMid = function(count) {
			count = util.parseNumber(count, min, max);
			var data = $scope.model.data;
			if(data.length >= count) {
				var newData = r.randomObjects(count);
				var start = Math.floor(data.length / 2) - Math.floor(count/2);
				var end = start + count;
				for(var i = start, j = 0; i < end; i++, j++) {
					update(data[i], newData[j]);
				}
			} 
		}

		$scope.updateLast = function(count) {
			count = util.parseNumber(count, min, max);
			var data = $scope.model.data;
			if(data.length >= count) {
				var newData = r.randomObjects(count);
				var start = data.length - count;
				var end = start + count;
				for(var i = start, j = 0; i < end; i++, j++) {
					update(data[i], newData[j]);
				}
			} 
		}

		$scope.partialUpdate = function(every) {
			every = util.parseNumber(every, min, max);
			var data = $scope.model.data;
			var count = Math.ceil(data.length / every);
			if(data.length > 0) {
				var newData = r.randomObjects(count);
				for(var i = 0, j = 0; i < data.length; i+=every, j++) {
					update(data[i], newData[j]);
				}
			} 
		}
	
		function update(item, newItem) {
			// item.id = newItem.id;
			item.c1 = newItem.c1;
			item.c2 = newItem.c2;
			item.c3 = newItem.c3;
			item.c4 = newItem.c4;
		}
		
	}]);