import angular from 'angular';

angular.module('search-dir', []);	

//use this directive or search controller

angular.module('search-dir').directive('search', function() {
	return function(scope, element, attrs) {

		function watcher(s) {
			return s.inputSearch;
		}

		function listener(newVal, oldVal) {
			if(scope.model.data.length > 0) {
				searchFor(newVal);
			}
		}

		function searchFor(txt) {
			var col = ['c1', 'c2', 'c3', 'c4'];
			var data = scope.model.data;
			var children = element.children();

			for(var j = 0; j < data.length; j++) {
				var item = data[j];
				for(var i = 0; i < 4; i++) {
					var prop = item[col[i]] + "";
					if(txt !== "" && prop.indexOf(txt) !== -1) {
						children.eq(j).children().eq(i+1).addClass('search-selected');
						// item.ref.cells[i+1].classList.add('search-selected');
						if(!item.search) {
							item.search = [null, null, null, null];
						}
						item.search[i] = txt;
					} else if (item.search && item.search[i]) {
						item.search[i] = null;
						children.eq(j).children().eq(i+1).removeClass('search-selected');
						// item.ref.cells[i+1].classList.remove('search-selected');
					}
					
				}
			}
		}

		scope.$watch(watcher, listener);
	};
});

