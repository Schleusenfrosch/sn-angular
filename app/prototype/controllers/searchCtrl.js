'use strict';

app.controller('SearchCtrl',['$scope','$log','$http','SearchService', function($scope,$log,$http,SearchService) {

	//asynchrones nachladen von vorgeschlagenen daten
	//Any function returning a promise object can be used to load values asynchronously
	$scope.getActions = function(val){
		return SearchService.getActions(val);
	};
}]);