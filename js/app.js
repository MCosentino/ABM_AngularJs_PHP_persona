
var app = angular.module('ABMangularPHP', []);


app.controller('controlMenu', function($scope, $http) {
  $scope.DatoTest="**Cosentino**";
  $scope.otroDato="**Mariano**";
});


app.controller('controlAlta', function($scope, $http) {
  $scope.DatoTest="**alta**";
  $scope.mascota={};
  $scope.mascota.raza= "salchicha" ;
 $scope.mascota.nombre= "paco" ;
  $scope.mascota.cumpleanios= new Date() ;

//inicio las variables
  $scope.persona={};
  $scope.persona.nombre= "natalia" ;
 $scope.persona.dni= "12312312" ;
  $scope.persona.apellido= "natalia" ;
  $scope.persona.foto="sinfoto";


  $scope.Guardar=function(){


  	console.log("persona a guardar:");
    console.log($scope.mascota);

    /*
    $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
 	  .then(function(respuesta) {     	
 		     //aca se ejetuca si retorno sin errores      	
      	 console.log(respuesta.data);

    },function errorCallback(response) {     		
     		//aca se ejecuta cuando hay errores
     		console.log( response);     			
 	  });

  */

  }
});


app.controller('controlGrilla', function($scope, $http) {
  	$scope.DatoTest="**grilla**";
 	  console.log("estoy en la grilla");
   

    $http.get('http://www.mocky.io/v2/57c8ab92120000e413e76a8c')
    .then(function(respuesta) {

      // correcto
      console.info("volvio:",respuesta.data);
      $scope.ListadoPersonas=respuesta.data;

    },function(error){
      //incorrecto
      console.info("error:",error);
       $scope.ListadoPersonas=[];

    });
 /*	$http.get('PHP/nexo.php', { params: {accion :"traer"}})
 	.then(function(respuesta) {     	

      	 $scope.ListadoPersonas = respuesta.data.listado;
      	 console.log(respuesta.data);

    },function errorCallback(response) {
     		 $scope.ListadoPersonas= [];
     		console.log( response);
     		
 	 });*/




  /*

          https://docs.angularjs.org/api/ng/service/$http

          the response object has these properties:

        data – {string|Object} – The response body transformed with the transform functions.
        status – {number} – HTTP status code of the response.
        headers – {function([headerName])} – Header getter function.
        config – {Object} – The configuration object that was used to generate the request.
        statusText – {string} – HTTP status text of the response.
            A response status code between 200 and 299 is considered a success
             status and will result in the success callback being called. 
             Note that if the response is a redirect, XMLHttpRequest will 
             transparently follow it, meaning that 
             the error callback will not be called for such responses.
   */
 	$scope.Borrar=function(persona){
		console.log("borrar"+persona);



/*$http.post("PHP/nexo.php",{accion :"borrar",persona:persona},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
.success(function(data, status, headers, config) {
    console.log("bien"+data);
  }).error(function(data, status, headers, config) {
     console.log("mal"+data);
});*/


/*
     $http.post('PHP/nexo.php', 
      headers: 'Content-Type': 'application/x-www-form-urlencoded',
      params: {accion :"borrar",persona:persona})
    .then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores        
         console.log(respuesta.data);

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });

*/
 	}




 	$scope.Modificar=function(id){
 		
 		console.log("Modificar"+id);
 	}





});
