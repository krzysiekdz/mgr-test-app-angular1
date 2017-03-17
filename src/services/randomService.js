import angular from 'angular';

angular.module('random-serv', [])
	.factory('randomObjects', function() {

	var id = 1;

	function randomObjects(count = 10) {
		var col1 = ['John', 'Paulo', 'Anthony', 'Roger', 'Graham', 'Robin', 'Terry', 'Erick', 'Michael', 'Carol', 'Simon', 'Sir'];
		var col2 = ['Champman', 'Cleese', 'Gillman', 'Idle', 'Jones', 'Palin', 'Cohen', 'Centurion', 'Dirk', 'Lorett', 'Lancelot', 'Robin', 'Galahad'];
		// var col3 = ['Przywódca', 'Mędrzec', 'Strażnik', 'Rewolucjonista', 'Prorok', 'Asystent', 'Wokalista', 'Urzędnik', 'Handlarz', 'Rycerz', 'Czarnoksiężnik'];
		var col3 = ['Leader', 'Wise man', 'Warden', 'Revolutionary', 'Prophet', 'Assistant', 'Singer', 'Officer', 'Tradesman', 'Knight', 'Wizard'];
		var col4 = [100, 200, 500, 1000, 1500, 2000, 3000, 5000, 8000, 10000];

	    var data = [];
	    for (var i = 0; i < count; i++) {
	        data.push({ 
	        	id: id++, 
	        	c1: col1[rand(col1.length)],
	        	c2: col2[rand(col2.length)],
	        	c3: col3[rand(col3.length)],
	        	c4: col4[rand(col4.length)]
	        });
	    }
	    return data;
	}

	function rand(mod) { //max modulo === 1000
	    return Math.floor(Math.random() * 1000 ) % mod;
	}

	function resetId() {
		id = 1;
	}

	function setId(i) {
	    id = i;
	}

	return {
		randomObjects: randomObjects,
		setId : setId, 
		resetId : resetId
	};

});

