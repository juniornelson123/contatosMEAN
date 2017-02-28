var	contatos = [
	{_id: 1, nome: 'Contato Exemplo1',	email: 'cont1@empresa.com.br'},
	{_id: 2, nome: 'Contato Exemplo2', email: 'cont2@empresa.com.br'},
	{_id: 3, nome: 'Contato Exemplo3',	email: 'cont3@empresa.com.br'}
];

var	ID_CONTATO_INC = 3;

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
		},
		delete: function(req, res){
			console.log(req.params)
			contatos = contatos.filter(function(contato) {
				return contato._id != req.params.id;
			});
			res.status(204).end();
		},
		create:	function(req, res) {
			var	contato	=	req.body;
			contato	=	contato._id	? atualiza(contato)	: adiciona(contato);
			res.json(contato);
		}


	}

	function adiciona(contatoNovo) {
		contatoNovo._id	= ++ID_CONTATO_INC;
		contatos.push(contatoNovo);
		return	contatoNovo;
	}

	function atualiza(contatoAlterar) {
		contatos = contatos.map(function(contato) {
			if(contato._id	==	contatoAlterar._id)	{
				contato	= contatoAlterar;
			}
			return	contato;
		});
		return	contatoAlterar;
	}

	return ContatoController;
}