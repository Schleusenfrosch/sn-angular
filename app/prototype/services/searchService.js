'use strict';
app.factory('SearchService',['$http','$log','$filter', function($http,$log,$filter) {
	//Auswahl für auto suggest
	var newPossibleActions = [];

	//Action names und die jeweiligen Entrypoints
	var unfilteredActions =[];
	var selectedAction;

	var searchService = {

		setSelected: function(newSelected){
			selectedAction = newSelected;
		},
		getSelected: function(){
			return selectedAction;
		},
		//val is der Suchstring,also der Parameter der sich in der Searchbox befindet
		getActions:  function(searchString){
			if(searchString !== undefined && searchString.length>=3 && searchString){
					return $http.get('prototype/data/input_service.json', {
						params: {
							searchstring: searchString
						}
					}).then(function(result){
						unfilteredActions = result.data.actions;
						for (var i = result.data.actions.length - 1; i >= 0; i--) {
							newPossibleActions[i] = result.data.actions[i].name;
						}
						//filterung des arrays mit $filter service von angular. Das Ergbnis ist ein gefiltertes Array
						newPossibleActions = $filter('filter')(newPossibleActions,searchString);
						return angular.copy(newPossibleActions);
					});
				}
				else{
					//leeres Array wenn length <3 um exception zu vermeiden
					newPossibleActions = [];
					return angular.copy(newPossibleActions);
				}
		},
		getAction: function(actionName){
			for(var i = 0; i<= unfilteredActions.length; i++){
				if(unfilteredActions[i].name == actionName){
					$log.debug('[SearchService]: found action '  + unfilteredActions[i].name + ' ' +unfilteredActions[i].entrypoint );
					return unfilteredActions[i];
				}
			}
		}
	};

		return searchService;
	}]);