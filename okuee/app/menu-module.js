'use strict';

/* Controllers */
var menuModule = angular.module('tikal.modules.menu.Menu', ['ngRoute','ui.bootstrap']);

// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
/*navigationModule.run(function ($rootScope, $templateCache) {
  $rootScope.$on('$viewContentLoaded', function () {
    $templateCache.removeAll();
  });
});*/

menuModule.config(function ($routeProvider, $httpProvider) {
    //comentario
    $routeProvider.otherwise({redirectTo: '/inicio'});
});

menuModule.directive('applicationMenu', function() {
  return {
    restrict: 'E',
    templateUrl: 'view/menu.html'
  };
});

menuModule.controller('tikal.modules.menu.MenuCtrl', ['$scope', '$location',
  function ($scope, $location) { 
	$scope.isCollapsed = true;
    $scope.isActiveOption = function (viewLocation) { 
		if ($location.path().indexOf(viewLocation) == 0) {
			return 'active';
		}
    };
}]);
