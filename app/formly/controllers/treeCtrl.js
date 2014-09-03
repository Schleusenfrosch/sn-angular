'use strict';

  angular.module('formly.render')

    .controller('TreeController', ['$scope', '$element', '$attrs',
      function ($scope, $element, $attrs) {
        this.scope = $scope;

        $scope.$element = $element;
        $scope.$nodesScope = null; // root nodes
        $scope.$type = 'tree';
        $scope.$emptyElm = null;

        $scope.emptyPlaceHolderEnabled = true;
        $scope.maxDepth = 0;

        $scope.boundTo = undefined;
        $scope.spacing = 50;
        $scope.spacingThreshold = Math.floor($scope.spacing / 4);

        // Check if it's a empty tree
        $scope.isEmpty = function() {
          return ($scope.$nodesScope && $scope.$nodesScope.$modelValue && $scope.$nodesScope.$modelValue.length === 0);
        };

        // add placeholder to empty tree
        $scope.place = function(placeElm) {
          $scope.$nodesScope.$element.append(placeElm);
          $scope.$emptyElm.remove();
        };

        $scope.resetEmptyElement = function() {
          if ($scope.$nodesScope.$modelValue.length === 0 &&
            $scope.emptyPlaceHolderEnabled) {
            $element.append($scope.$emptyElm);
          } else {
            $scope.$emptyElm.remove();
          }
        };

        var collapseOrExpand = function(scope, collapsed) {
          var nodes = scope.childNodes();
          for (var i = 0; i < nodes.length; i++) {collapsed ? nodes[i].collapse() : nodes[i].expand();
            var subScope = nodes[i].$childNodesScope;
            if (subScope) {
              collapseOrExpand(subScope, collapsed);
            }
          }
        };

        $scope.collapseAll = function() {
          collapseOrExpand($scope.$nodesScope, true);
        };

        $scope.expandAll = function() {
          collapseOrExpand($scope.$nodesScope, false);
        };

      }]);
