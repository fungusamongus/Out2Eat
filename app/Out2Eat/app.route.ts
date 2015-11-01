module Out2Eat{
	"use strict";
	
	function routes($routeProvider: ng.route.IRouteProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "./views/home.html",
				controller: "HomeController",
				controllerAs: "vm"
			})
	}
	
	routes.$inject = ["$routeProvider"]
	
	angular
		.module("Out2Eat")
		.config(routes);
}