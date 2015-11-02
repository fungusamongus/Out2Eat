module Out2Eat{
	export class RestaurantService{
		static $inject =["http", "LocateService"];
		constructor(private $http: ng.IHttpService, private LoacateService){
			
		}
		//Call to Yelp API for restaurant data based on location
	}
	angular
		.module("Out2Eat")
		.service("RestaurantService", RestaurantService);
}