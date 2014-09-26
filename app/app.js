'use strict';
// Angular Init
var app = angular.module('app', ['ng',
	'ngAnimate',
	'ui.router',
	'hljs',
	'formly',
	'ngResource',
	'ui.bootstrap',
]);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider,formlyConfigProvider) {
	$locationProvider.html5Mode(false);

	/*$urlRouterProvider.otherwise('/');*/
	$stateProvider.state('demo', {
		url: '/demo',
		title: 'Formly for Angular',
		templateUrl: '/demo/views/demo.html',
		controller: 'DemoCtrl'
	})
	.state('proto',{
		url:'/proto',
		title: 'Ein kleiner Test',
		templateUrl: '/prototype/views/proto.html',
		controller:'MainCtrl'
	});

	//Definition der input felder
	var fields = [
		'textarea', 'radio', 'select', 'number', 'checkbox',
		'password', 'hidden', 'email', 'text' //tree,currency,list,button
	];
	angular.forEach(fields, function(field) {
		formlyConfigProvider.setTemplateUrl(field, 'formly/templates/formly-field-' + field + '.html');
	});

});

app.run(function($rootScope, $state, $stateParams, $window) {
	// loading animation
	$rootScope.setLoading = function() {
		$rootScope.isViewLoading = true;
	};

	$rootScope.unsetLoading = function() {
		$rootScope.isViewLoading = false;
	};

	$rootScope.isViewLoading = true;

	$rootScope.$on('$viewContentLoading', function(ev, to, toParams, from, fromParams) {
		console.log('viewContentLoading');
		$rootScope.setLoading();
	});

	$rootScope.$on('$viewContentLoaded', function(ev, to, toParams, from, fromParams) {
		console.log('viewContentLoaded');
		$rootScope.unsetLoading();
	});

	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
		if (error)
			console.log('stateChangeError:', error.data);
	});
});