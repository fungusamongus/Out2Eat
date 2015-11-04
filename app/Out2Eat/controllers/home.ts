module Out2Eat {
	class HomeController {
		static $inject = ["LocateService", "RestaurantService"];
			constructor(private LocateService, private RestaurantService) {
				
			}
			findMe(){
				console.log("clicked");
				this.LocateService.currentLocation();
			}
			findFood(){
				console.log("clacked");
				this.RestaurantService.listRestaurants();
			}
	}
	
	angular
		.module("Out2Eat")
		.controller("HomeController", HomeController);
}

