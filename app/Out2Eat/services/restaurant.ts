

var request_data = {
	url: 'http://localhost:1234/search?term=food&location=San+Francisco',
	method: 'GET'
}


module Out2Eat{
	export class RestaurantService{
		static $inject =["$http", "LocateService"];
		constructor(private $http, private LoacateService){
			
		}
		//Call to Yelp API for restaurant data based on location
		listRestaurants(){
			$.ajax({
				url: request_data.url,
				type: request_data.method,
			}).done(function(data) {
				console.log(data);
			})
		}
	}
	angular
		.module("Out2Eat")
		.service("RestaurantService", RestaurantService);
}