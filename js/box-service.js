(function (angular) {

	'use strict';

	angular
		.module('app')
		.factory('DataService', DataService);

	DataService.$inject = [];

	function DataService() {
		
		return {
			getData : getData
		};

		function getData() {
			return {
				"value": 25,
				"total": 240,
				"type": "bigNumber"
			};
		}
	}

})(angular);
