'use strict';

/* Controllers */
var nostrosModule = angular.module('tikal.modules.nostros.Nosotros', ['ngRoute','ui.bootstrap','ngSanitize']);

nostrosModule.config(function ($routeProvider, $httpProvider) {
	$routeProvider.when('/nosotros', {templateUrl: 'view/nosotros/nosotros.html', controller:'tikal.modules.nosotros.NosotrosCtrl'});
    
});

nostrosModule.controller('tikal.modules.nosotros.NosotrosCtrl', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
    $scope.datosHeader = {
        title1: 'acerca de',
        title2: "o'kuee",
        subtitle: 'industria qu\u00edmica mexicana de calidad a su alcance',
        image:'resources/banner-nosotros1.jpg'
    };
    $scope.datosIntro = {
        descripcion: 'Empresa formada por 100% de inversión mexicana que día a día va avanzando con paso firme en la industria nacional con investigación continua y métodos de fabricación que beneficien la producción en ruta para la optimización en todos los ámbitos garantizando a nuestros clientes el compromiso de un objetivo común.',
        recuadro: {
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
        }
    };
    $scope.headerFeatFilosofia = {
        title1: 'nuestra',
        title2: "filosofía",
        subtitle: 'atendemos a las necesidades de la industria'
    };
    $scope.featuredFilosofia = {
        features: [
            {
                imagen: 'resources/featured04.jpg',
                titulo: 'Políticas',
                texto: 'Lo más importante para Factoría Química O’kuee es la óptima relación entre servicio, empresa y Equipo Laboral. El cumplimiento de las normas, reglas y Filosofía deben de ser Autónomas a cada integrante de Factoría Química O’kuee.<br>El cliente es parte importante el funcionamiento y mejora diaria de la empresa.'
            },
            {
                imagen: 'resources/featured05.jpg',
                titulo: 'Visión',
                texto: 'Repuntar en los Estandares internacionales de calidad, puntualidad y apoyo técnico.'
            },
            {
                imagen: 'resources/featured06.jpg',
                titulo: 'Misión',
                texto: 'Cada integrante de Factoría Química O’kuee debe crecer paralelamente profesional, personal y familiarmente. Hacer de la empresa un centro de trabajo que contagie las buenas formas de funcionamiento.'
            }
        ]
    };
}]);

