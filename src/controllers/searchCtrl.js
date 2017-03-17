import angular from 'angular';

angular.module('search-ctrl', []);	

angular.module('search-ctrl').controller('searchInputCtrl', ['$scope',  function($scope) {

	$scope.searchFor = function(txt) {
		var col = ['c1', 'c2', 'c3', 'c4'];
		var data = $scope.model.data;

		for(var j = 0; j < data.length; j++) {
			var item = data[j];
			for(var i = 0; i < 4; i++) {
				var prop = item[col[i]] + "";
				if(txt !== "" && prop.indexOf(txt) !== -1) {
					if(!item.search) {
						item.search = [false, false, false, false];
					}
					item.search[i] = true;
				} else if (item.search && item.search[i]) {
					item.search[i] = false;
				}
				
			}
		}
	}

}]);


angular.module('search-ctrl').controller('searchTableCtrl', ['$scope',  function($scope) {

	$scope.isSearched = function(item, i) {
		return item.search && item.search[i];
	};

}]);