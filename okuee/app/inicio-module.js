'use strict';

/* Controllers */
var inicioModule = angular.module('tikal.modules.inicio.Inicio', ['ngRoute','ui.bootstrap']);

inicioModule.config(function ($routeProvider, $httpProvider) {
	$routeProvider.when('/inicio', {templateUrl: 'view/inicio/inicio.html', controller:'tikal.modules.inicio.InicioCtrl'});
    
});

inicioModule.controller('tikal.modules.inicio.InicioCtrl', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
    $scope.datosHeader = {
        title1: 'bienvenido',
        title2: "a o'kuee",
        subtitle: 'industria qu\u00edmica mexicana de calidad a su alcance',
        image:'resources/banner-home.jpg'
    };
}]);