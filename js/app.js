var app = angular.module("mySeasons", ["ngRoute", "ngSanitize"]);

app.config(function($routeProvider) {
	$routeProvider.when("/",
	{
		templateUrl: "partials/summer.html",
		controller: "summerCtrl"
	})
	.when("/winter",
	{
		templateUrl:"partials/winter.html",
		controller: "winterCtrl"
	})
	.when("/fall",
	{
		templateUrl:"partials/fall.html",
		controller: "summerCtrl"
	})
	.when("/spring",
	{
		templateUrl:"partials/spring.html",
		controller: "summerCtrl"
	})
	.otherwise(
	{
		redirectTo: "/404.page",
		templateUrl: "partials/404page.html"
	})
	
});