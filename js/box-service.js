(function (angular) {

	'use strict';

	angular
		.module('app')
		.factory('DataService', DataService);

	DataService.$inject = ['$http'];

	function DataService($http) {
		
		return {
			getData : getData
		};

		function getData() {
			return $http.get('api/data.json');
		}
	}

})(angular);
