import angular from 'angular';

angular.module('row-ctrl', [])
	.controller('rowCtrl', ['$scope',  function($scope) {

	var selected = null;

	$scope.selectItem = function(item) {
		if(item === selected) {
			selected = null;
		} else {
			selected = item;
		}
	}

	$scope.removeItem = function(item) {
		var data = $scope.model.data;
		var index = data.findIndex(it => it.id === item.id);
		if(index > -1) {
			data.splice(index, 1);
		}
	}

	$scope.isSelected = function(item) {
		return item === selected;
	}

		
}]);