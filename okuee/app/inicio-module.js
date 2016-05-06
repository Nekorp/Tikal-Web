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
        subtitle: '<p class="text-uppercase">industria qu\u00edmica mexicana de calidad a su alcance</p>',
        image:'resources/banner-home.jpg'
    };
    $scope.datosIntro = {
        descripcion: 'Empresa formada por 100% de inversión mexicana que día a día va avanzando con paso firme en la industria nacional con investigación continua y métodos de fabricación que beneficien la producción en ruta para la optimización en todos los ámbitos garantizando a nuestros clientes el compromiso de un objetivo común.'
    };
    $scope.headerFeatDivisiones = {
        title1: 'Divisíon',
        title2: "Textil",
        subtitle: 'Hilando el Futuro',
        image:false
    };
    $scope.featuredDivisiones = {
        features: [
            {
                imagen: 'resources/featured01.jpg',
                titulo: 'Textil',
                texto: 'Industria dedicada a la fabricaci\u00F3n y acabado de telas.',
                link: {
                    display:'leer más',
                    uri:'#/industria/textil'
                }
            },
            {
                imagen: 'resources/featured02.jpg',
                titulo: 'Institucional y Limpieza',
                texto: 'Industria dedicada al desarrollo de productos para el cuidado del hogar, cuidado personal, limpieza industrial, y alimentaria. cumple con las necesidades del consumidor y el medio ambiente.',
                link: {
                    display:'leer más',
                    uri:'#/industria/institucional'
                }
            },
            {
                imagen: 'resources/featured03.jpg',
                titulo: 'Químicos',
                texto: 'Industria dedicada a la transformaci\u00F3n de sustancias naturales y sint\u00E9ticas.',
                link: {
                    display:'leer más',
                    uri:'#/industria/quimicos'
                }
            }
        ]
    };
}]);
