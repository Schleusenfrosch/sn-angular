'use strict';

app.factory('StepService',['$http','$log','$filter', function($http,$log,$filter) {
	var nextStepUrl;
	var responseUrl;

	var stepService = {

		setResponseUrl: function(newUrl){
			$log.debug('[StepService]: setResponseUrl(' + newUrl +')');
			responseUrl = newUrl;
		},
		getResponseUrl: function(){
			return responseUrl;
		},
		setNextStepUrl: function(newUrl){
			$log.debug('[StepService]: setNextStepUrl(' + newUrl +')');
			nextStepUrl = newUrl;
		},
		getNextStepUrl: function(){
			return responseUrl;
		},

		getNextStep:  function(){
			return $http.get(nextStepUrl).success(function(result){
				$log.debug('[StepService]: getNextStep()'+ result.fields);
				stepService.setResponseUrl(result.sendto);
				stepService.setNextStepUrl(result.nextstep);
				return result;
			});
		}
	};
		return stepService;
	}]);
