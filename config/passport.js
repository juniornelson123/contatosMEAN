var passport = require("passport"); 
var GitHubStrategy = require("passport-github").Strategy;
var mongoose = require("mongoose")
module.exports = function(){

	var Usuario = mongoose.model("Usuario")
	passport.use(new GitHubStrategy({

		clientID: "f973d0c613619fa9e03f",
		clientSecret: "51b94d1d9d42f615c078b1914b384fc58f8e38d4",
		callbackURL: "http://localhost:3000/auth/github/callback"

	}, function(accessToken, refreshToken, profile, done){

		Usuario.findOrCreate({"login": profile.username}, {"nome": profile.username}, function(erro, usuario){
			if(erro){

				done(erro)
			}
			return done(null, usuario)
		})
	}));

	passport.serializeUser(function(usuario, done){
		done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done){
		Usuario.findById(id).exec()
			.then(function(usuario){
				done(null, usuario);
		})
	});
}