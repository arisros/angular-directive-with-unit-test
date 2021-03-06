(function (angular) {
	'use strict';

	angular
		.module('app')
		.controller('BoxController', BoxController);

	BoxController.$inject = ['DataService'];

	function BoxController(DataService) {
		var vm = this;
		vm.content = {};
		vm.fetchContent = fetchContent;

		function fetchContent() {
			DataService.getData().then(function (result) {
				vm.content = result.data;
			});
		}

		vm.fetchContent();
	}

})(angular);
