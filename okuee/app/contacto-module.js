'use strict';

/* Controllers */
var contactoModule = angular.module('tikal.modules.contacto.Contacto', ['ngRoute','ui.bootstrap','ngSanitize', 'ngMap', 'vcRecaptcha', 'ngResource', 'angular-ladda', 'ngAnimate']);

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

contactoModule.controller('tikal.modules.contacto.ContactoCtrl', ['$scope', '$resource', '$location', '$log', 'vcRecaptchaService',
  function ($scope, $resource, $location, $log, vcRecaptchaService) {
    $scope.alerts = [];
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
    $scope.modelo = {};
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
                descripcion:'info@okuee.com',
                link:'mailto:info@okuee.com'
            }
        ]
    };
    $scope.servicioContacto = $resource('backend/mail-contact-service.php',{}, {});
    /** form captcha **/
    $scope.response = null;
    $scope.widgetId = null;
    $scope.model = {
        key: '6LdN2R0TAAAAAOLZNQolt82-UQ1yuVQhO7ow_QqK'
    };
    $scope.setResponse = function (response) {
        console.info('Response available: %s', response);
        $scope.modelo.captchaValue = response;
    };
    $scope.setWidgetId = function (widgetId) {
        console.info('Created widget ID: %s', widgetId);
        $scope.widgetId = widgetId;
    };
    $scope.borrar = function() {
        $scope.modelo = {};
        vcRecaptchaService.reload($scope.widgetId);
        $scope.response = null;
        $scope.alerts = [];
    };
    $scope.submit = function () {
        $scope.alerts = [];
        if (!$scope.modelo.captchaValue) {
            $scope.alerts.push({msg: 'Capture el captcha', type:'danger'});
            return;
        }
        var valid;
        //console.log('sending the captcha response to the server', $scope.response);
        $scope.cargando = true;
        $scope.servicioContacto.save({}, $scope.modelo).$promise.then(
            function(data) {
                $scope.response = null;
                vcRecaptchaService.reload($scope.widgetId);
                $scope.modelo = {};
                $scope.cargando = false;
                $scope.alerts.push({msg: 'Gracias por contactarte con nosotros.', type:'success'});
            },
            function(errResponse) {
                if (errResponse.status == 403) {
                    $scope.alerts.push({msg: 'Fallo al resolver el captcha.', type:'danger'});
                } else {
                    $scope.alerts.push({msg: 'Lo sentimos tu mensaje no pudo ser enviado, intentelo mas tarde.', type:'danger'});    
                }
                $scope.response = null;
                vcRecaptchaService.reload($scope.widgetId);
                $scope.cargando = false;
        });
    };
}]);