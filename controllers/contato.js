
module.exports = function(app){
	var	Contato	=	app.models.contato;
	var ContatoController = {
		index: function(req, res){
			Contato.find().populate("emergencia").exec().then(function(contatos){
				res.json(contatos);
			}, function(erro){
				console.log(erro);
				res.status(500).json(error)
			})
		},
		show: function(req, res){
			var id = req.params.id
			Contato.findById(id).exec().then(function(contato){
				if	(!contato)	throw new Error("Contato não	encontrado");
				res.json(contato)
			}, function(erro){
				res.status(404).json(erro)
			})
			
		},
		delete: function(req, res){
			console.log(req.params)
			var _id = req.params.id
			Contato.remove({"_id": _id}).exec().then(function(){
				res.status(204).json({info: "Cadastrado com sucesso"})
			}, function(erro){
				res.status(500).json({info: "Erro ao remover contato"})
			})
		},
		create:	function(req, res) {
			var	_id	= req.body._id;

			req.body.emergencia = req.body.emergencia || null
			if(_id){
				Contato.findByIdAndUpdate(_id, req.body).exec().then(function(contato){
					res.json(contato);
				}, function(erro){
					res.status(500).json(erro);
				})

			}else{
				Contato.create(req.body).then(function(contato){
					res.status(200).json(contato)
				}, function(erro){
					res.status(500).json(erro)

				})
			}
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