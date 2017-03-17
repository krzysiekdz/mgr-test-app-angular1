import angular from 'angular';

angular.module('update-ctrl', [])
	.controller('updateCtrl', ['$scope',  function($scope) {

		$scope.col = 2;
		$scope.word = 'a';
		$scope.replace = true;

		$scope.updateFirst = function(col, word, replace) {
			updateCol(1, col, word, replace);
		}

		$scope.updateMid = function(col, word, replace) {
			updateCol(2, col, word, replace);
		}

		$scope.updateLast = function(col, word, replace) {
			updateCol(3, col, word, replace);
		}

		
		$scope.update10 = function(col, word, replace) {
			col--;
			var colName = 'c' + col;
			var data = $scope.model.data;
			if(data.length > 10) {
				for(var i = 0; i < data.length; i += 10) {
					if(replace) {
						data[i][colName] = word;
					} else {
						data[i][colName] += word;
					}
					//angular work is like this
					// var tr = data[i].ref;
					// tr.cells[col].innerText = data[i][colName];
				}
			}
		}

		function updateCol(type, col, word, replace) {
			col--;
			var data = $scope.model.data;
			if(data.length > 0 && (col > 0 && col < 5)) {
				var i = getTypePos(type);
				var colName = 'c' + col;
				if(replace) {
					data[i][colName] = word;
				} else {
					data[i][colName] += word;
				}
				//angular work is like this
				// var tr = data[i].ref;
				// tr.cells[col].innerText = data[i][colName];
			}
		}

		function getTypePos(type) {
			var data = $scope.model.data;
			switch(type) {
				case 1 : return 0;
				case 2 : return Math.floor(data.length/2);
				case 3 : return data.length - 1;
			}
		}
		
	}]);