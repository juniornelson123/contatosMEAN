angular.module("contatooh").controller('ContatoController', function($scope, $routeParams, $resource, $location){
	
	var	Contato	= $resource('/contatos');
	$scope.mensagem = {text: ''}
	console.log($routeParams)	 
	if($routeParams.contatoId)	{
		$resource("/contatos/"+$routeParams.contatoId).get(function(data){
			console.log(data)
			$scope.contato = data
		}, function(data){
			console.log(data)
		})
	}else{
		$scope.contato = new Contato()

	}

	$scope.salva = function() {
		console.log($scope.contato)
		$scope.contato.$save(function(){
			$location.path('#!/contatos')
		}, function(erro){
			console.log(erro)
		})

	};

	Contato.query(function(contatos){
		$scope.contatos = contatos;
	})
})