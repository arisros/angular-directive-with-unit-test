(function () {
	'use strict';

	angular
		.module('app')
		.directive('boxCounter', boxCounter);

	boxCounter.$inject = ['$compile', '$templateRequest', '$templateCache'];

	function boxCounter($compile, $templateRequest, $templateCache) {

		return {
			restrict: 'E',
			link: linkFn,
			replace: true,
			scope: {
				data: '=',// data
				type: '='//bigNumber, etc...
			}
		};	

		function getTemplateUrl(contentType) {
			var template = '';

			switch (contentType) {
				case 'bigNumber':
					template = 'bigNumber.html';
					break;
				case 'bigNumberGraph':
					template = 'bigNumberGraph.html';
					break;
				case 'bigNumberPencil':
					template = 'bigNumberPencil.html';
					break;
			}

			return template;
		}

		function linkFn(scope, element, attrs) {

			$templateRequest(getTemplateUrl(scope.type))
				.then(function (html) {
					element.html(html);
					$compile(element.contents())(scope);
				},
				function(err) {
					console.log(err);
				}
			);
				
		}

	}

})();
