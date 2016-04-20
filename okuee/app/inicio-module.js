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
                    descripcion:'info@okuee.com',
                    link:'mailto:info@okuee.com'
                }
            ]
        }
    };
    $scope.headerFeatDivisiones = {
        title1: 'divisiones',
        title2: "químicas",
        subtitle: 'atendemos a las necesidades de la industria',
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
                titulo: 'Institucional',
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
    $scope.headerFeatProcesos = {
        title1: 'nuestros',
        title2: 'procesos',
        subtitle: 'contamos con infraestructura y tecnologia de punta',
        image:false
    };
    $scope.featuredProcesosA = {
        features: [
            {
                imagen: 'resources/feat-proceso01.jpg',
                titulo: 'Tintura en poliester',
                texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                link: {
                    display:'leer más',
                    uri:'#/procesos/tintura/poliester'
                }
            },
            {
                imagen: 'resources/feat-proceso02.jpg',
                titulo: 'Tintura en nylon',
                texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                link: {
                    display:'leer más',
                    uri:'#/procesos/tintura/nylon'
                }
            },
            {
                imagen: 'resources/feat-proceso03.jpg',
                titulo: 'Tintura en algodón 100%',
                texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                link: {
                    display:'leer más',
                    uri:'#/procesos/tintura/algodon'
                }
            }
        ]
    };
    $scope.featuredProcesosB = {
        features: [
            {
                imagen: 'resources/feat-proceso04.jpg',
                titulo: 'Tintura en poliester/algodón',
                texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                link: {
                    display:'leer más',
                    uri:'#/procesos/tintura/polialgodon'
                }
            },
            {
                imagen: 'resources/feat-proceso05.jpg',
                titulo: 'Pre-blanqueo químico y blanqueo óptico',
                texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                link: {
                    display:'leer más',
                    uri:'#/procesos/pre-blanqueo'
                }
            },
            {
                imagen: 'resources/feat-proceso06.jpg',
                titulo: 'Acabado de telas',
                texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                link: {
                    display:'leer más',
                    uri:'#/procesos/acabado'
                }
            }
        ]
    };
}]);