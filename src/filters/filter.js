
import angular from 'angular';

angular.module('filter10-filter', []);


angular.module('filter10-filter').filter('filter10', function() {
	return function(data, filterOn) {
		if(!filterOn) {
			//a tutaj moge usunac klase z tbody (?)
			return data;
		} else {
			//tutaj moge dodac klasę do tbody (?)
			if(angular.isArray(data) && data.length > 0) {
				var res = [];
				//sprawdzic obie wersje, tj petlę angular oraz zwykly for
				// angular.forEach(data, function(item) {
				// 	if( (item.id % 10) === 0 ) {
				// 		res.push(item);
				// 	}
				// });
				for(var i = 0; i < data.length; i++) {
					if( (data[i].id % 10) === 0 ) {
						res.push(data[i]);
					}
				}
				return res;
			} else {
				return data;
			}
		}
	};
});









