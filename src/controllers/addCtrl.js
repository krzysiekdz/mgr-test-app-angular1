import angular from 'angular';

angular.module('add-ctrl', [])
	.controller('addCtrl', ['$scope', 'randomObjects', 'util',  function($scope, r, u) {

		$scope.addCount = '';
		var min = 1, max = 5000;

		$scope.addFirst = function(count) {
			var c = u.parseNumber(count, min, max);
			var newData = r.randomObjects(c);
			$scope.model.data = newData.concat($scope.model.data);
		}

		$scope.addMid = function(count) {
			var c = u.parseNumber(count, min, max);
			var newData = r.randomObjects(c);
			var mid = Math.floor($scope.model.data.length / 2);
			var args = [mid, 0];//position mid, 0 removes - for splice function 
			args = args.concat(newData);//mid, 0 + newData -> args for splice
			Array.prototype.splice.apply($scope.model.data, args);
		}

		$scope.addLast = function(count) {
			var c = u.parseNumber(count, min, max);
			var newData = r.randomObjects(c);
			$scope.model.data = $scope.model.data.concat(newData);
		}
		
	}]);