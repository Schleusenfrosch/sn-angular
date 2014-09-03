'use strict';
app.controller('DemoCtrl',['$scope', '$parse','$log','$window','formlyOptions', function($scope, $parse,$log,$window,formlyOptions) {
	// Public Methods
	$scope.onSubmit = function onSubmit() {
		$scope.submittedData = $scope.formData;
	};

	$scope.toPrettyJSON = function(obj, tabWidth) {
		var strippedObj = angular.copy(obj);
		var result = JSON.stringify(strippedObj, null, Number(tabWidth));
		return result;
	};

	$scope.preConfiguredOptions = formlyOptions.getOptions();

	$scope.formFields = [{
		key: 'firstName',
		type: 'text',
		label: 'First Name',
		placeholder: 'Jane',
		required: true
	}, {
		key: 'lastName',
		type: 'text',
		label: 'Last Name',
		placeholder: 'Doe'
	}, {
		key: 'email',
		type: 'email',
		placeholder: 'janedoe@gmail.com',
		description: 'We won\'t spam you'
	}, {
		key: 'about',
		type: 'textarea',
		label: 'Tell me about yourself',
		placeholder: 'I like puppies',
		lines: 4
	}, {
		key: 'triedEmber',
		type: 'radio',
		label: 'Have you tried EmberJs yet?',
		default: 'no',
		options: [
			{
				name: 'Yes, and I love it!',
				value: 'yesyes'
			}, {
				name: 'Yes, but I\'m not a fan...',
				value: 'yesno',
				description: 'Help me!'
			}, {
				name: 'Nope',
				value: 'no'
			}
		]
	}, {
		key: 'angularFan',
		type: 'text',
		label: 'Angular Fan?',
		disabled: true,
		default: 'yes',
		required: true
	}, {
		key: 'love',
		type: 'number',
		label: 'How much love?',
		default: 2,
		min: 0,
		max: 100,
		required: true
	},
	{
		key: 'transportation',
		type: 'select',
		label: 'How do you get around in the city',
		options: [
			{
				name: 'Car',
				group: 'inefficiently'
			}, {
				name: 'Helicopter',
				group: 'inefficiently'
			}, {
				name: 'Sport Utility Vehicle',
				group: 'inefficiently'
			}, {
				name: 'Bicycle',
				group: 'efficiently'
			}, {
				name: 'Skateboard',
				group: 'efficiently'
			}, {
				name: 'Walk',
				group: 'efficiently'
			}, {
				name: 'Bus',
				group: 'efficiently'
			}, {
				name: 'Scooter',
				group: 'efficiently'
			}, {
				name: 'Train',
				group: 'efficiently'
			}, {
				name: 'Hot Air Baloon',
				group: 'efficiently'
			}
		]
	}, {
		key: 'password',
		type: 'password',
		label: 'Password'
	}, {
		key: 'checkThis',
		type: 'checkbox',
		label: 'Check this here',
		description: 'To reveal something secret...'
	}, {
		key: 'hiddenWhenUnchecked',
		type: 'text',
		label: 'Conditional input',
		placeholder: 'This is a big secret! Try typing "joe"',
		hideExpression: '!checkThis'
	}, {
		key: 'showWhenJoe',
		type: 'text',
		label: 'You typed Joe! You found me!',
		placeholder: 'hideExpressions are evaluated on the result',
		hideExpression: 'hiddenWhenUnchecked !== "joe"'
	}, {
		key:'secretCode',
		type: 'hidden',
		default: 'secret_code'
	}];

	$log.info($scope.formFields);

	$scope.hiddenFormFields = [
		{
			key: 'field',
			type: 'textarea',
			label: 'This is a special form field',
			placeholder: 'It has a watch property with an expression function that depends on something outside the result...',
			watch: {
				expression: function(field) {
					return !/joe/ig.test($scope.formData.hiddenWhenUnchecked);
				},
				listener: function(field, _new) {
					field.hide = _new;
				}
			}
		}
	];

	$scope.formOptions = {
		uniqueFormId: 'formly',
		submitCopy: 'Save',
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