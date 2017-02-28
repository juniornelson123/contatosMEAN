var	contatos = [
	{_id: 1, nome: 'Contato Exemplo1',	email: 'cont1@empresa.com.br'},
	{_id: 2, nome: 'Contato Exemplo2', email: 'cont2@empresa.com.br'},
	{_id: 3, nome: 'Contato Exemplo3',	email: 'cont3@empresa.com.br'}
];	

module.exports = function(app){
	var ContatoController = {
		index: function(req, res){
			res.json(contatos);
		},
		show: function(req, res){
			var idContato = req.params.id
			var contato = contatos.filter(function(contato){
				return contato._id = idContato

			})[0];
			contato? res.json(contato) : res.status(400).send("Contato não encontrado")
		}
	}

	return ContatoController;
}