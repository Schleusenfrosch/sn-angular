  'use strict';

  angular.module('formly.render')
  .directive('tree', [ 'treeConfig', '$window',
    function(treeConfig, $window) {
      return {
        restrict: 'A',
        scope: true,
        controller: 'TreeController',
        link: function(scope, element, attrs) {

          var config = {};
          angular.extend(config, treeConfig);
          if (config.treeClass) {
            element.addClass(config.treeClass);
          }

          scope.$emptyElm = angular.element($window.document.createElement('div'));
          if (config.emptyTreeClass) {
            scope.$emptyElm.addClass(config.emptyTreeClass);
          }

          scope.$watch('$nodesScope.$modelValue.length', function() {
            if (scope.$nodesScope.$modelValue) {
              scope.resetEmptyElement();
            }
          }, true);

          scope.$watch(attrs.emptyPlaceHolderEnabled, function(val) {
            if ((typeof val) == 'boolean') {
              scope.emptyPlaceHolderEnabled = val;
            }
          });

          scope.$watch(attrs.maxDepth, function(val) {
            if ((typeof val) == 'number') {
              scope.maxDepth = val;
            }
          });

          scope.$watch(attrs.boundTo, function(val) {
            if ((typeof val) == 'string' && val.length > 0) {
              scope.boundTo = angular.element(val);
            }
          });

          scope.$watch(attrs.spacing, function(val) {
            if ((typeof val) == 'number' && val > 0) {
              scope.spacing = val;
              scope.spacingThreshold = Math.floor(scope.spacing / 4);
            }
          });
        }
      };
}]);

