'use strict';

/* Controllers */
var inicioModule = angular.module('tikal.modules.inicio.Inicio', ['ngRoute','ui.bootstrap','ngSanitize']);

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
    $scope.datosIntro = {
        descripcion: 'Somos una factoría química mexicana que lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        recuadro: {
            titulo: "Contacta con o'kuee",
            link: '#/contacto',
            linktext: 'Escríbenos en nuestro formulario de contacto',
            contenido: [
                {
                    isLink:false,
                    titulo:'PLANTA',
                    descripcion:'FACTORIA QUIMICA OKUEE, S.A. DE C.V'
                },
                {
                    isLink:false,
                    titulo:'DIRECCÓN',
                    descripcion:'Fuente cibeles no. 117<br>Colonia las fuentes ind. Toluca, Edo. de México<br> C.P.50228'
                },
                {
                    isLink:false,
                    titulo:'POR TELÉFONO',
                    descripcion:'(01722) 582 4885 Y (01722) 590 8631'
                },
                {
                    isLink:true,
                    titulo:'POR MAIL',
                    descripcion:'info@okuee.com'
                }
            ]
        }
    };
    $scope.headerFeatDivisiones = {
        title1: 'divisiones',
        title2: "químicas",
        subtitle: 'atendemos a las necesidades de la industria'
    };
    $scope.featuredDivisiones = {
        features: [
            {
                style:'',
                imagen: 'resources/featured04.jpg',
                titulo: 'Textil',
                texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                link: {
                    display:'leer más',
                    uri:'#/industria/textil'
                }
            },
            {
                style:'',
                imagen: 'resources/featured05.jpg',
                titulo: 'Institucional',
                texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                link: {
                    display:'leer más',
                    uri:'#/industria/institucional'
                }
            },
            {
                style:'',
                imagen: 'resources/featured06.jpg',
                titulo: 'Químicos',
                texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                link: {
                    display:'leer más',
                    uri:'#/industria/quimicos'
                }
            }
        ]
    };
    $scope.featuredProcesos = {
        features: [
            {
                style:'',
                imagen: 'resources/featured01.jpg',
                titulo: 'Tintura en poliester',
                texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                link: {
                    display:'leer más',
                    uri:'#/procesos/tintura/poliester'
                }
            },
            {
                style:'',
                imagen: 'resources/featured02.jpg',
                titulo: 'Tintura en nylon',
                texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                link: {
                    display:'leer más',
                    uri:'#/procesos/tintura/nylon'
                }
            },
            {
                style:'',
                imagen: 'resources/featured03.jpg',
                titulo: 'Tintura en algodon 100%',
                texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                link: {
                    display:'leer más',
                    uri:'#/procesos/tintura/algodon'
                }
            }
        ]
    };
}]);

inicioModule.directive('okueeDescripcion', function() {
  return {
    restrict: 'E',
    scope: {
      contenido: '=contenido'
    },
    templateUrl: 'view/inicio/inicio-descripcion.html'
  };
});

inicioModule.directive('okueeFeature', function() {
  return {
    restrict: 'E',
    scope: {
      contenido: '=contenido'
    },
    templateUrl: 'view/inicio/feature-content.html'
  };
});