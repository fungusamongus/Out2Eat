module Out2Eat {
	class HomeController {
		static $inject = ["LocateService", "RestaurantService", "$q"];
			constructor(private LocateService, private RestaurantService, private $q: ng.IQService) {
				
			}
			
			findFood(){
				console.log("clacked");
				this.RestaurantService.listRestaurants().then(function(data){
					console.log(data);
				})
			}
			findMe(){
				this.LocateService.currentLocation().then(function(data){
					console.log(data.coords);
				})
			}
	}
	
	angular
		.module("Out2Eat")
		.controller("HomeController", HomeController);
}

