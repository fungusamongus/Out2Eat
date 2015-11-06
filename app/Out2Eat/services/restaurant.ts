
module Out2Eat{
	export class RestaurantService{
		static $inject =["$http", "LocateService"];
		constructor(private $http, private LocateService){
			
		}
		//Call to Yelp API for restaurant data based on location
		listRestaurants(){
			navigator.geolocation.getCurrentPosition(function(position:any){
				var myLat = (position.coords.latitude).toString();
				var myLon = (position.coords.longitude).toString();
				var url = 'http://localhost:1234/search?term=food&ll=' + myLat + ',' + myLon;
				var method = 'GET'	
				$.ajax({
					url: url,
					type: method,
				}).then(function(data) {
					console.log(data.businesses);
				})
			})
		}
	}
	angular
		.module("Out2Eat")
		.service("RestaurantService", RestaurantService);
}