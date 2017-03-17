
import angular from 'angular';

angular.module('fetch-ctrl', []);

angular.module('fetch-ctrl').constant('dataUrl', 'http://localhost:8080/data-files/data');

angular.module('fetch-ctrl').controller('fetchCtrl', ['$scope', '$http', 'dataUrl', 'randomObjects',  function($scope, $http, url, r) {
	$scope.fetch = function(count) {
		var dataUrl = url + count + '.json';
		$http({
			method: 'GET',
			url: dataUrl
		}).then(function(data) {
			$scope.model.data = data.data;
			r.setId(data.data.length+1);
		});
	}
}]);









