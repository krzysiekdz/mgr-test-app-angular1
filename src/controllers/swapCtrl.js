
import angular from 'angular';

angular.module('swap-ctrl', [])
	.controller('swapCtrl', ['$scope',  function($scope) {
		
		$scope.swapFirst = function() {
			var data = $scope.model.data;
			if(data.length > 1) {
				var i = 0;
				var j = 1;
				swap(i, j);
			}
		}

		$scope.swapMid = function() {
			var data = $scope.model.data;
			if(data.length > 1) {
				var i = Math.floor(data.length / 2) - 1;
				var j = i+1;
				swap(i, j);
			}
		}

		$scope.swapLast = function() {
			var data = $scope.model.data;
			if(data.length > 1) {
				var i = data.length-2;
				var j = i+1;
				swap(i, j);
			}
		}
		
		function swap(i, j) {
			var data = $scope.model.data;

			var temp = data[i];
			$scope.model.data[i] = data[j];
			$scope.model.data[j] = temp;
		}		
		
	}]);









