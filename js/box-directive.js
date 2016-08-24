
// box-counter resource="api/new-tender.json" title="New Tender" foot-text="Total Tender" class="orange"> 
// box-counter resource="api/update-stage-today.json" title="Update Stage Today" foot-text="not should this" class="orange"> 
// box-counter resource="api/tender-you-bid.json" title="Tender You Bid" footText="Active Tender" class="orange"> 

angular.module('app').directive('boxCounter', boxCounter);

boxCounter.$inject = ['$http', 'TenderService'];

function boxCounter($http, TenderService) {
	return {
		restrict: 'AE',
		templateUrl: 'templates/box.html',
		scope: {
			title: '@',
			footText: '='
		},
		bindToController: true,
		link: linkFn
	};

	function linkFn(scope, element, attributes) {
		scope.icon = attributes.icon;
		if (scope.icon === 'graph') {
			scope.graph = true;
		}
		TenderService.getNewTenderCount();
		/**
		 * Get http resources of attributes "resource"
		 * @param  {[type]} scope.rows
		 * @return {[type]} 
		 */
    $http
    	.get(attributes.resource)
    	.success(successFn);








    function successFn(response) {
      scope.rows = response.data;
    }
  }
}
