module.exports = function(app){
	var contato = app.controllers.contato;
	app.get("/contatos", contato.index);
	app.get("/contatos/:id", contato.show);
}