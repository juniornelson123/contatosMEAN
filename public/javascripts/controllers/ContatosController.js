angular.module("contatooh").controller('ContatosController', function($scope, $resource){
	$scope.contatos	= [];
	$scope.filtro = "";
	$scope.mensagem = {text: ''}
	$scope.total = $scope.contatos.length;
	$scope.incrementa = function(){
		$scope.total++;
	}

	function buscarContatos(){
		$resource("/contatos").query(function(data){
			console.log(data)
			$scope.contatos = data
			$scope.mensagem	=	{};
		}, function(data){
			$scope.mensagem	=	{
				text: "Impossivel carregar contatos"
			};
		})
	}

	$scope.remove = function(contato){
		$resource("/contatos/"+contato._id).delete(function(data){
				buscarContatos()
			},function(erro) {
				$scope.mensagem	= {
					text: 'Não foi possível remover	o contato'
				}
				console.log(erro);
			}
		);
		
	}

	buscarContatos();

})