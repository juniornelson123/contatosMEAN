angular.module('contatooh', ['ngRoute', 'ngResource']).config(function($routeProvider, $httpProvider){
	$httpProvider.interceptors.push("meuInterceptor");
})