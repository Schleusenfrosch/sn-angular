'use strict';
app.controller('MainCtrl',['$scope', '$parse','$log','$resource' ,'SearchService','StepService',
	function($scope,$parse,$log,$resource,SearchService,StepService) {

	$scope.userHistory = [];
	$scope.selected = undefined;
	$scope.formFields ={};
	$scope.data = {};

	//asynchrones nachladen von vorgeschlagenen daten
	//Any function returning a promise object can be used to load values asynchronously
	$scope.getActions = function(val){
		return SearchService.getActions(val);
	};

	//senden der Anfrage im Suchfeld
	$scope.sendSearchInput = function send(keyEvent){
		//Abfrage ob Eingabe gedrückt wurde
		if (keyEvent.which === 13){
			//wurde eine Auswahl getroffen?
			if($scope.selected !== undefined){
				var userInput =  $scope.selected;
				StepService.setNextStepUrl(SearchService.getAction(userInput).entrypoint);
				getNextStep();
			}
		}
	};


	//submit function
	$scope.onSubmit = function onSubmit() {
		//post
		$scope.submittedData = $scope.formData;
		alert('submitted!' + $scope.submittedData + ' to' + StepService.getResponseUrl());
		clearFormFields();

		// TODO on success /if ok
		getNextStep();
	};

	$scope.selectChange = function(which){
		alert('select' + which + ' changed!');
	};

	$scope.toPrettyJSON = function(obj, tabWidth) {
		var strippedObj = angular.copy(obj);
		var result = JSON.stringify(strippedObj, null, Number(tabWidth));
		return result;
	};

	//aktion zur user history hinzufügen
	function addToHistory(action){
		var time = new Date();
		$scope.userHistory.push({action: action, time: time});
	}

	//formfelder leeren
	function clearFormFields(){
		$scope.formFields = {};
		$scope.formData = {};
	}

	//nächsten Dialogschritt erhalten
	function getNextStep(){
		StepService.getNextStep().success(function(data){
			route(data);
		});
	}
	//routing an die entsprechende $scope variable für die directive
	function route(data){
		var directiveName = data.directive;
		$scope.data.step = data.step;
		if(directiveName === 'formly'){
			$scope.formFields = data.fields;
		}
	}

	//wird getriggert wenn sich die eingabe im Suchefeld ändert
	$scope.setSelected = function(val){
		SearchService.setSelected(val);
	};

	$scope.cancel = function(){
		clearFormFields();
	};

	$scope.formOptions = {
		uniqueFormId: 'form',
		submitCopy: 'Submit',
		hideSubmit: false
	};
	$scope.hiddenFormOptions = {
		uniqueFormId: 'hiddenFormly',
		hideSubmit: true
	};
	$scope.submittedData = null;
	$scope.formData = {};
	$scope.hiddenFormData = {};
	$scope.formFieldsStr = $scope.toPrettyJSON($scope.formFields, 4);
	$scope.formOptionsStr = $scope.toPrettyJSON($scope.formOptions, 4);
	$scope.formFieldsError = false;
	$scope.formOptionsError = false;
}]);