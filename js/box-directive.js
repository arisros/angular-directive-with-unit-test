
// box-counter resource="api/new-tender.json" title="New Tender" foot-text="Total Tender" class="orange"> 
// box-counter resource="api/update-stage-today.json" title="Update Stage Today" foot-text="not should this" class="orange"> 
// box-counter resource="api/tender-you-bid.json" title="Tender You Bid" footText="Active Tender" class="orange"> 

angular.module('app').directive('boxCounter', function($http) {
	return {
		restrict: 'AE',
		templateUrl: 'templates/box.html',
		scope: {
			title: '=',
			footText: '='
		},
		link: function(scope, element, attributes) {
      $http.get(attributes.resource).success(function(response) {
        scope.rows = response.data;
        console.log(scope.rows);
      });
    }
	};
});
