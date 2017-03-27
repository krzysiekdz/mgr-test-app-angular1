import angular from 'angular';

angular.module('filter10-dir', []);	


angular.module('filter10-dir').directive('filter', function() {
	return function(scope, element, attrs) {

		function watcher(s) {
			return s.model.filter10_on;
		}

		function listener(newVal, oldVal) {
			if(scope.model.data.length > 0) {
				if(newVal) {
					filter10();
				} else {
					unfilter10();
				}
			}
		}

		function filter10() {
			var data = scope.model.data;
			var children = element.children();

			for(var j = 0; j < data.length; j++) {
				var item = data[j];
				
				if(item.id % 10 !== 0) {
					children.eq(j).addClass('visible-off');
					item.visible_hide = true;
				}
			}
		}

		function unfilter10() {
			var data = scope.model.data;
			var children = element.children();

			for(var j = 0; j < data.length; j++) {
				var item = data[j];
				if(item.visible_hide) {
					children.eq(j).removeClass('visible-off');
					item.visible_hide = false;
				}
			}
		}

		scope.$watch(watcher, listener);
	};
});

