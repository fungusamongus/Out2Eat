module Out2Eat {
	class HomeController {
		static $inject = ["LocateService", "RestaurantService"];
			constructor(private LocateService, private RestaurantService) {
				
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

