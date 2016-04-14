'use strict';

/* Controllers */
var interiorModule = angular.module('tikal.modules.interior.Interior', ['ngRoute','ui.bootstrap']);

interiorModule.directive('contenidoInterior', function() {
  return {
    restrict: 'E',
      scope: {
      datos: '=datos'
    },
    templateUrl: 'view/interior/contenido.html'
  };
});

interiorModule.config(function ($routeProvider, $httpProvider) {
	$routeProvider.when('/procesos/tintura/poliester', {templateUrl: 'view/interior/interior.html', controller: 'tikal.modules.procesos.tintura.poliester'});
    $routeProvider.when('/procesos/tintura/nylon', {templateUrl: 'view/interior/interior.html', controller: 'tikal.modules.procesos.tintura.nylon'});
    $routeProvider.when('/procesos/tintura/algodon', {templateUrl: 'view/interior/interior.html', controller: 'tikal.modules.procesos.tintura.algodon'});
    $routeProvider.when('/procesos/tintura/polialgodon', {templateUrl: 'view/interior/interior.html', controller: 'tikal.modules.procesos.tintura.polialgodon'});
    $routeProvider.when('/procesos/pre-blanqueo', {templateUrl: 'view/interior/interior.html', controller: 'tikal.modules.procesos.pre-blanqueo'});
    $routeProvider.when('/procesos/acabado', {templateUrl: 'view/interior/interior.html', controller: 'tikal.modules.procesos.acabado'});
    
    /*Industria*/
    $routeProvider.when('/industria/textil', {templateUrl: 'view/interior/interior.html', controller: 'tikal.modules.industria.textil'});
    $routeProvider.when('/industria/institucional', {templateUrl: 'view/interior/interior.html', controller: 'tikal.modules.industria.institucional'});
    $routeProvider.when('/industria/quimicos', {templateUrl: 'view/interior/interior.html', controller: 'tikal.modules.industria.quimicos'});
    
});

interiorModule.controller('tikal.modules.procesos.tintura.poliester', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
	$scope.datosHeader={
        title1: 'Nuestros',
        title2: 'procesos',
        subtitle: 'Contamos con infraestructura y tecnolog\u00EDa de punta',
        image:'resources/int-img1.jpg'
    };
    $scope.datosContenido={
        image:'resources/int-img2.jpg',
        imageGraph:'resources/captura.png',
        subtitle:'Procesos/Tintura de poliester',
        title1: 'Tintura',
        title2: 'en poliester',
        content: 'OVADET HT2 Proporciona  al género, blancura homogénea en todos los rollos, excelente  hidrofilidad y buena humectación. OVAL G-30  agente lubricante ligeramente viscoso utilizable en el baño de tintura, ayudan a la fricción del material, eliminando marcas y reduciendo considerablemente las arrugas.DISPRO DN es un retardan te especial para obtener tinturas bien igualadas con colorantes  tiene una variedad de propiedades exclusivas para retardar el agotamiento y mejorar la migración del colorante. Evita las desigualdades de tinturas producidas por variación de temperaturas en la tintura de fibras acrílicas y nylon, garantiza una subida regular del colorante.QUELANT 39  agente secuestran te de iones Fe2+ y Mg2+ presentes en el agua, para dar un ablandamiento eficaz en proceso textil, secuestra 120 ppm por cada gramo que utilice de producto.'
    };
}]);

interiorModule.controller('tikal.modules.procesos.tintura.nylon', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
	$scope.datosHeader={
        title1: 'Nuestros',
        title2: 'procesos',
        subtitle: 'Contamos con infraestructura y tecnolog\u00EDa de punta',
        image:'resources/int-img1.jpg'
    };
    $scope.datosContenido={
        image:'resources/int-img2.jpg'
    };
}]);

interiorModule.controller('tikal.modules.procesos.tintura.algodon', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
	$scope.datosHeader={
        title1: 'Nuestros',
        title2: 'procesos',
        subtitle: 'Contamos con infraestructura y tecnolog\u00EDa de punta',
        image:'resources/int-img1.jpg'
    };
    $scope.datosContenido={
        image:'resources/int-img2.jpg'
    };
}]);

interiorModule.controller('tikal.modules.procesos.tintura.polialgodon', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
	$scope.datos={
        title1: 'Nuestros',
        title2: 'procesos',
        subtitle: 'Contamos con infraestructura y tecnolog\u00EDa de punta',
        image:'resources/int-img1.jpg'
    };
}]);

interiorModule.controller('tikal.modules.procesos.pre-blanqueo', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
	$scope.datos={
        title1: 'Nuestros',
        title2: 'procesos',
        subtitle: 'Contamos con infraestructura y tecnolog\u00EDa de punta',
        image:'resources/int-img1.jpg'
    };
}]);

interiorModule.controller('tikal.modules.procesos.acabado', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
	$scope.datos={
        title1: 'Nuestros',
        title2: 'procesos',
        subtitle: 'Contamos con infraestructura y tecnolog\u00EDa de punta',
        image:'resources/int-img1.jpg'
    };
}]);

interiorModule.controller('tikal.modules.industria.textil', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
	$scope.datos={
        title1: 'Nuestros',
        title2: 'procesos',
        subtitle: 'Contamos con infraestructura y tecnolog\u00EDa de punta',
        image:'resources/int-img1.jpg'
    };
}]);

interiorModule.controller('tikal.modules.industria.institucional', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
	$scope.datos={
        title1: 'Nuestros',
        title2: 'procesos',
        subtitle: 'Contamos con infraestructura y tecnolog\u00EDa de punta',
        image:'resources/int-img1.jpg'
    };
}]);

interiorModule.controller('tikal.modules.industria.quimicos', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
	$scope.datos={
        title1: 'Nuestros',
        title2: 'procesos',
        subtitle: 'Contamos con infraestructura y tecnolog\u00EDa de punta',
        image:'resources/int-img1.jpg'
    };
}]);

