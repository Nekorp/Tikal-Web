'use strict';

/* Controllers */
var contactoModule = angular.module('tikal.modules.contacto.Contacto', ['ngRoute','ui.bootstrap','ngSanitize', 'ngMap']);

contactoModule.config(function ($routeProvider, $httpProvider) {
	$routeProvider.when('/contacto', {templateUrl: 'view/contacto/contacto.html', controller:'tikal.modules.contacto.ContactoCtrl'});
    
});

/*contactoModule.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.21', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});*/

contactoModule.controller('tikal.modules.contacto.ContactoCtrl', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
    $scope.subtitle='contacto';
    $scope.datosHeader = {
        title1: 'contáctanos',
        title2: "",
        subtitle: 'en okuee factoría química estamos para escucharte',
        image:'resources/banner-contacto.jpg'
    };
    $scope.datosRecuadro = {
        titulo: "Datos del Contacto",
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
    };
}]);