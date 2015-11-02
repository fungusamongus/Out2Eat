module Out2Eat {
	class HomeController {
		static $inject = ["LocateService"];
			constructor(private locate: LocateService) {
				
			}
	}
	
	angular
		.module("Out2Eat")
		.controller("HomeController", HomeController);
}