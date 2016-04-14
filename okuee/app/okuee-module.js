'use strict';

/* Controllers */
var okueeModule = angular.module('tikal.modules.okuee', ['ngRoute','ui.bootstrap', 'tikal.modules.inicio.Inicio', 'tikal.modules.interior.Interior','tikal.modules.menu.Menu']);

okueeModule.directive('okueeHeader', function() {
  return {
    restrict: 'E',
    scope: {
      datos: '=datos'
    },
    templateUrl: 'view/section-header.html'
  };
});