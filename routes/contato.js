module.exports = function(app){
	var contato = app.controllers.contato;
	console.log(contato)
	app.route("/contatos")
	.get(contato.index)
	.post(contato.create);
	
	app.route("/contatos/:id")
	.get(contato.show)
	.delete(contato.delete);
}