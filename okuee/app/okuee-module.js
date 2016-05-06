'use strict';

/* Controllers */
var okueeModule = angular.module('tikal.modules.okuee', 
                                 ['ngRoute','ui.bootstrap',
                                  'tikal.modules.inicio.Inicio', 
                                  'tikal.modules.interior.Interior',
                                  'tikal.modules.menu.Menu',
                                  'tikal.modules.nostros.Nosotros',
                                  'tikal.modules.contacto.Contacto',
                                  'ngtweet'
]);

okueeModule.config(function ($routeProvider, $httpProvider) {
    $routeProvider.otherwise({redirectTo: '/inicio'});
});


okueeModule.directive('okueeHeaderA', function() {
  return {
    restrict: 'E',
    scope: {
      datos: '=datos'
    },
    templateUrl: 'view/template/section-header-a.html'
  };
});

okueeModule.directive('okueeHeaderB', function() {
  return {
    restrict: 'E',
    scope: {
      datos: '=datos'
    },
    templateUrl: 'view/template/section-header-b.html'
  };
});

okueeModule.directive('okueeTextIntro', function() {
  return {
    restrict: 'E',
    scope: {
      contenido: '=contenido'
    },
    templateUrl: 'view/template/text-intro.html'
  };
});

okueeModule.directive('okueeFeatureA', function() {
  return {
    restrict: 'E',
    scope: {
      contenido: '=contenido'
    },
    templateUrl: 'view/template/feature-content-a.html'
  };
});

okueeModule.directive('okueeFeatureB', function() {
  return {
    restrict: 'E',
    scope: {
      contenido: '=contenido'
    },
    templateUrl: 'view/template/feature-content-b.html'
  };
});

okueeModule.directive('okueeRecuadroContacto', function() {
  return {
    restrict: 'E',
    scope: {
      datos: '=datos'
    },
    templateUrl: 'view/template/recuadro-contacto.html'
  };
});
