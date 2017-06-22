import angular from 'angular';

angular.module('replace-ctrl', [])
	.controller('replaceCtrl', ['$scope', 'randomObjects', 'util',  function($scope, r, util) {

		$scope.count = '';

		$scope.replaceFirst = function(count) {
			count = util.parseNumber(count, 1, 10000);
			var data = $scope.model.data;
			if(data.length >= count) {
				var newData = r.randomObjects(count);
				for(var i = 0; i < count; i++) {
					data[i] = newData[i];
				}
			} 
		}

		$scope.replaceMid = function(count) {
			count = util.parseNumber(count, 1, 10000);
			var data = $scope.model.data;
			if(data.length >= count) {
				var newData = r.randomObjects(count);
				var start = Math.floor(data.length / 2) - Math.floor(count/2);
				var end = start + count;
				for(var i = start, j = 0; i < end; i++, j++) {
					data[i] = newData[j];
				}
			} 
		}

		$scope.replaceLast = function(count) {
			count = util.parseNumber(count, 1, 10000);
			var data = $scope.model.data;
			if(data.length >= count) {
				var newData = r.randomObjects(count);
				var start = data.length - count;
				var end = start + count;
				for(var i = start, j = 0; i < end; i++, j++) {
					data[i] = newData[j];
				}
			} 
		}
		
	}]);