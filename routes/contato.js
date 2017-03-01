function verificarAutenticacao(req, res,	next) {
	if (req.isAuthenticated()){
		return	next();
	}else {
		res.status('401').json('Não	autorizado');
	}
}
module.exports = function(app){
	var contato = app.controllers.contato;
	
	console.log(contato)

	app.route("/contatos")
	.get(verificarAutenticacao,contato.index)
	.post(verificarAutenticacao,contato.create);
	
	app.route("/contatos/:id")
	.get(verificarAutenticacao,contato.show)
	.post(verificarAutenticacao,contato.create)
	.delete(verificarAutenticacao,contato.delete);
}