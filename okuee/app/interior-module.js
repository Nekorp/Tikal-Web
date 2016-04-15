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
        description: 'Nuestros procesos son realizados en nuestras instalaciones que lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        renglones: [{title:'OVADET HT2. ', content:'Proporciona al g\u00E9nero, blancura homog\u00E9nea en todos los rollos, excelente hidrofilidad y buena humectaci\u00F3n.'},
                    {title:'OVAL G-30. ', content:' Agente lubricante ligeramente viscoso utilizable en el ba\u00F1o de tintura, ayudan a la fricci\u00F3n del material, eliminando marcas y reduciendo considerablemente las arrugas.'},
                    {title:'DISPRO DN. ', content:'Es un retardante especial para obtener tinturas bien igualadas con colorantes tiene una variedad de propiedades exclusivas para retardar el agotamiento y mejorar la migraci\u00F3n del colorante. Evita las desigualdades de tinturas producidas por variaci\u00F3n de temperaturas en la tintura de fibras acr\u00EClicas y nylon, garantiza una subida regular del colorante.'},
                    {title:'QUELANT 39. ', content:'Agente secuestrante de iones Fe2+ y Mg2+ presentes en el agua, para dar un ablandamiento eficaz en proceso textil, secuestra 120 ppm por cada gramo que utilice de producto.'}]

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
        image:'resources/int-img2.jpg',
        imageGraph:'resources/captura.png',
        subtitle:'Procesos/Tintura de nylon',
        title1: 'Tintura',
        title2: 'en nylon',
        description: 'Nuestros procesos son realizados en nuestras instalaciones que lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        renglones: [{title:'DISPRO NY. ', content:'Agente igualador para colorantes \u00E1cidos sobr\u00E9 fibras de nylon o lana. Act\u00FAa como un compatibilizador de colorantes \u00E1cidos y cati\u00F3nicos en un solo ba\u00F1o de tenido con fibras en mezclas. No produce espuma.'},
                    {title:'OVAFIX NW. ', content:'Es un producto para la mejora de solideces en h\u00FAmedo de tinturas y estampaciones con colorantes \u00E1cidos sobre fibras poliamidas.'}]
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
        image:'resources/int-img2.jpg',
        imageGraph:'resources/captura.png',
        subtitle:'Procesos/Tintura de algod\u00F3n',
        title1: 'Tintura',
        title2: 'en poliester',
        description: 'Nuestros procesos son realizados en nuestras instalaciones que lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        renglones: [{title:'OVADET HT2', content:' Proporciona  al género, blancura homogénea en todos los rollos, excelente  hidrofilidad y buena humectación.'},
                    {title:'OVAL G-30', content:' Agente lubricante ligeramente viscoso utilizable en el baño de tintura, ayudan a la fricción del material, eliminando marcas y reduciendo considerablemente las arrugas.DISPRO DN es un retardan te especial para obtener tinturas bien igualadas con colorantes  tiene una variedad de propiedades exclusivas para retardar el agotamiento y mejorar la migración del colorante. Evita las desigualdades de tinturas producidas por variación de temperaturas en la tintura de fibras acrílicas y nylon, garantiza una subida regular del colorante.'},
                    {title:'QUELANT 39', content:' Agente secuestran te de iones Fe2+ y Mg2+ presentes en el agua, para dar un ablandamiento eficaz en proceso textil, secuestra 120 ppm por cada gramo que utilice de producto.'}]
    };
}]);

interiorModule.controller('tikal.modules.procesos.tintura.polialgodon', ['$scope', '$location', '$log',
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
        subtitle:'Procesos/Tintura de poliester/algod\u00F3n',
        title1: 'Tintura',
        title2: 'en poliester',
        description: 'Nuestros procesos son realizados en nuestras instalaciones que lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        renglones: [{title:'OVADET HT2', content:' Proporciona  al género, blancura homogénea en todos los rollos, excelente  hidrofilidad y buena humectación.'},
                    {title:'OVAL G-30', content:' Agente lubricante ligeramente viscoso utilizable en el baño de tintura, ayudan a la fricción del material, eliminando marcas y reduciendo considerablemente las arrugas.DISPRO DN es un retardan te especial para obtener tinturas bien igualadas con colorantes  tiene una variedad de propiedades exclusivas para retardar el agotamiento y mejorar la migración del colorante. Evita las desigualdades de tinturas producidas por variación de temperaturas en la tintura de fibras acrílicas y nylon, garantiza una subida regular del colorante.'},
                    {title:'QUELANT 39', content:' Agente secuestran te de iones Fe2+ y Mg2+ presentes en el agua, para dar un ablandamiento eficaz en proceso textil, secuestra 120 ppm por cada gramo que utilice de producto.'}]
    };
}]);

interiorModule.controller('tikal.modules.procesos.pre-blanqueo', ['$scope', '$location', '$log',
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
        subtitle:'Pre-blanqueo qu\u00EDmico y blanqueo \u00F3ptico',
        title1: '',
        title2: 'Pre-blanqueo qu\u00EDmico y blanqueo \u00F3ptico',
        description: 'Nuestros procesos son realizados en nuestras instalaciones que lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        renglones: [{title:'OVADET MP5. ', content:'Producto que optimiza el aprovechamiento del per\u00F3xido de hidr\u00F3geno, la sosa junto con el lubricante y el detergente, el uso de este producto no requiere de un secuestrante ni de un estabilizador.'},
                    {title:'OVAZIME CTL. ', content:'Biocatalizador \u00FAtil para lograr la descomposici\u00F3n total del per\u00F3xido de hidr\u00F3geno residual utilizado en el blanqueo de fibras celul\u00F3sicas y sus mezcla'}]
    };
}]);

interiorModule.controller('tikal.modules.procesos.acabado', ['$scope', '$location', '$log',
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
        subtitle:'Acabado de telas',
        title1: 'Tintura',
        title2: 'en poliester',
        description: 'Nuestros procesos son realizados en nuestras instalaciones que lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        renglones: [{title:'OVADET HT2', content:' Proporciona  al género, blancura homogénea en todos los rollos, excelente  hidrofilidad y buena humectación.'},
                    {title:'OVAL G-30', content:' Agente lubricante ligeramente viscoso utilizable en el baño de tintura, ayudan a la fricción del material, eliminando marcas y reduciendo considerablemente las arrugas.DISPRO DN es un retardan te especial para obtener tinturas bien igualadas con colorantes  tiene una variedad de propiedades exclusivas para retardar el agotamiento y mejorar la migración del colorante. Evita las desigualdades de tinturas producidas por variación de temperaturas en la tintura de fibras acrílicas y nylon, garantiza una subida regular del colorante.'},
                    {title:'QUELANT 39', content:' Agente secuestran te de iones Fe2+ y Mg2+ presentes en el agua, para dar un ablandamiento eficaz en proceso textil, secuestra 120 ppm por cada gramo que utilice de producto.'}]
    };
}]);

interiorModule.controller('tikal.modules.industria.textil', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
	$scope.datosHeader={
        title1: 'Nuestros',
        title2: 'procesos',
        subtitle: 'Contamos con infraestructura y tecnolog\u00EDa de punta',
        image:'resources/banner-textiles.jpg'
    };
    $scope.datosContenido={
        image:'resources/int-img2.jpg',
        imageGraph:'resources/captura.png',
        subtitle:'Industria textil',
        title1: 'Industria',
        title2: 'textil',
        description: 'Nuestros procesos son realizados en nuestras instalaciones que lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        
    };
}]);

interiorModule.controller('tikal.modules.industria.institucional', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
	$scope.datosHeader={
        title1: 'Nuestros',
        title2: 'procesos',
        subtitle: 'Contamos con infraestructura y tecnolog\u00EDa de punta',
        image:'resources/banner-institucional.jpg'
    };
    $scope.datosContenido={
        image:'resources/int-img2.jpg',
        imageGraph:'',
        subtitle:'Industria institucional',
        title1: 'Industria',
        title2: 'institucional',
        description: 'Nuestros procesos son realizados en nuestras instalaciones que lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        renglones: [{title:'DETERGENTES. ', content:'Base detergente multiusos: Mezcla de tensoactivos emulsificante  aplicado en el campo de la limpieza y desinfecci\u00F3n de pisos.'},
                    {title:'MAHS I. ', content:'Base detergente de estructura  granulada ideal para la preparaci\u00F3n de detergentes  en polvo y l\u00EDquido tipo zote y Vel rosita.'},
                    {title:'DETERGENTE PARA ROPA DELICADA. ', content:'Base concentrada de detergente transparente para ropa delicada tipo m\u00E1s color y Ariel.'},
                    {title:'SECUESTRANTES. ', content:'Sustancia para el ablandamiento de agua.'},
                    {title:'BLANQUEADORES \u00D3PTICOS. ', content:'Para la fabricaci\u00F3n de jabones tipo m\u00E1s blancura.'},
                    {title:'REACTOY. ', content:'Mezcla sin\u00E9rgica de hidrocarburos parafinados refinados con emulsificantes / amelgadores  no i\u00F3nicos. Libre de APEO ideal para la emulsi\u00F3n de esencias.'},
                    {title:'BASE SUAVIZANTES. ', content:'Suavizante org\u00E1nico  concentrado ideal para el suavizado de prendas, de f\u00E1cil diluci\u00F3n.'},
                    {title:'SICON 4.5. ', content:'Suavizante org\u00E1nico ideal para el acabado de prendas, altamente concentrada de f\u00E1cil diluci\u00F3n en su preparaci\u00F3n del suavizado.'},
                    {title:'SICON STEIN. ', content:'Es una base concentrada para la elaboraci\u00F3n de suavizantes dom\u00E9sticos e industrial, cati\u00F3nico emulsionado con aditivos,  y humectantes.'},
                    {title:'SICON  HAUS. ', content:'Mezcla de suavizante org\u00E1nico con alcoholes y lubricante,  para la elaboraci\u00F3n de suavizantes dom\u00E9sticos. Elimina el uso de alcohol et\u00EDlico, sales cuaternarias, espesantes y alcoholes grasos.'},
                    {title:'DESENGRASANTE PARA MEC\u00C1NICOS. ', content:'Pasta base crema con alto poder de desengrase ideal para la emulsi\u00F3n de grasas.'},
                    {title:'DESENGRASANTE INDUSTRIAL. ', content:'L\u00EDquido concentrado ideal para la eliminaci\u00F3n de cochambre e incrustaciones de grasa en las paredes o equipos de frituras y rostizados.'},
                    {title:'PERCLOROETILENO. ', content:'Desengrasante ideal para tintorer\u00EDas que lavan en seco.'},
                    {title:'BASE ALN. ', content:'Silic\u00F3n ideal para la fabricaci\u00F3n de amorales y abrillantadores.'},
                    {title:'OVAFLOW.    ', content:'Espesante que proporciona a los suavizantes una mayor viscosidad.'}]
        
    };  
}]);

interiorModule.controller('tikal.modules.industria.quimicos', ['$scope', '$location', '$log',
  function ($scope, $location, $log) {
	$scope.datosHeader={
        title1: 'Nuestros',
        title2: 'procesos',
        subtitle: 'Contamos con infraestructura y tecnolog\u00EDa de punta',
        image:'resources/banner-quimicos.jpg'
    };
    $scope.datosContenido={
        image:'resources/int-img2.jpg',
        imageGraph:'',
        subtitle:'Industria qu\u00EDmica',
        title1: 'Industria',
        title2: 'qu\u00EDmica',
        description: 'Nuestros procesos son realizados en nuestras instalaciones que lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        renglones: [{title:'Contamos con la distribución de materias primas.', content:''},
                    {title:'', content:'\u00C1C. ACETICO AL 85%'},
                    {title:'', content:'\u00C1C. FOSFORICO.'},
                    {title:'', content:'\u00C1C. CLOHIDRICO.'},
                    {title:'', content:'\u00C1C. CITRICO.'},
                    {title:'', content:'SOOSA L\u00CCQ. AL 50%'},
                    {title:'', content:'SOSA EN ESCAMAS.'},
                    {title:'', content:'POTASDA .IQ. AL 47%'},
                    {title:'', content:'CARBONATO DE SODIO GRADO TEXTIL.'},
                    {title:'', content:'CARBONATO DE SODIO ANHIDRIDO.'},
                    {title:'', content:'NAFTALENO SULFONATO DE SODIO.'},
                    {title:'', content:'CLORURO DE BENZALCONIO.'},
                    {title:'', content:'NONIL FENOL ETOCILADO A 6 Y 10 MOLES.'},
                    {title:'', content:'PEG 200, 300 Y 400.'},
                    {title:'', content:'LESS 30.'},
                    {title:'', content:'AMIDA DE COCO.'}]
        
    };
}]);

