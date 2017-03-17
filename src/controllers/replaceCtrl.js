import angular from 'angular';

angular.module('replace-ctrl', [])
	.controller('replaceCtrl', ['$scope', 'randomObjects',  function($scope, r) {

		$scope.replCount = 10;

		$scope.replaceFirst = function(count) {
			count = Number(count);
			var data = $scope.model.data;
			if(data.length >= count) {
				var newData = r.randomObjects(count);
				for(var i = 0; i < count; i++) {
					replace(data[i], newData[i]);
				}
			} 
		}

		$scope.replaceMid = function(count) {
			count = Number(count);
			var data = $scope.model.data;
			if(data.length >= count) {
				var newData = r.randomObjects(count);
				var start = Math.floor(data.length / 2) - Math.floor(count/2);
				var end = start + count;
				for(var i = start, j = 0; i < end; i++, j++) {
					replace(data[i], newData[j]);
				}
			} 
		}

		$scope.replaceLast = function(count) {
			count = Number(count);
			var data = $scope.model.data;
			if(data.length >= count) {
				var newData = r.randomObjects(count);
				var start = data.length - count;
				var end = start + count;
				for(var i = start, j = 0; i < end; i++, j++) {
					replace(data[i], newData[j]);
				}
			} 
		}
	
		function replace(item, newItem) {
			item.id = newItem.id;
			item.c1 = newItem.c1;
			item.c2 = newItem.c2;
			item.c3 = newItem.c3;
			item.c4 = newItem.c4;
		}
		
	}]);