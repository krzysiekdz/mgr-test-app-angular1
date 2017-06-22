import angular from 'angular';

angular.module('add-ctrl', [])
	.controller('addCtrl', ['$scope', 'randomObjects',  function($scope, r) {

		$scope.addCount = '';

		$scope.addFirst = function(count) {
			var newData = r.randomObjects(count);
			$scope.model.data = newData.concat($scope.model.data);
		}

		$scope.addMid = function(count) {
			var newData = r.randomObjects(count);
			var mid = Math.floor($scope.model.data.length / 2);
			var args = [mid, 0];//position mid, 0 removes - for splice function 
			args = args.concat(newData);//mid, 0 + newData -> args for splice
			Array.prototype.splice.apply($scope.model.data, args);
		}

		$scope.addLast = function(count) {
			var newData = r.randomObjects(count);
			$scope.model.data = $scope.model.data.concat(newData);
		}
		
	}]);