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
			scope: {
				data: '=',// data
				type: '='//bigNumber, etc...
			},
		};	

		function getTemplateUrl(contentType) {
			var template = '';
			switch (contentType) {
				case 'big-number':
					template = './templates/big-number.html';
					break;
				case 'big-number-graph':
					template = './templates/big-number-graph.html';
					break;
				case 'big-number-pencil':
					template = './templates/big-number-pencil.html';
					break;
			}
			return template;
		}

		function linkFn(scope, element, attrs) {
			$templateRequest(getTemplateUrl(scope.type))
				.then(function (html) {
					element.html(html);
					// Replace true
					element.replaceWith($compile(element.contents())(scope));
				},
				function(err) {
					console.log(err);
				}
			);			
		}

	}

})();



