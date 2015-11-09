
module Out2Eat{
	export class RestaurantService{
		static $inject =["$q", "LocateService"];
		constructor(private $q: ng.IQService, private LocateService){
			
		}
		//Call to Yelp API for restaurant data based on location
		listRestaurants(){
			var deferred = this.$q.defer();
			this.LocateService.currentLocation().then(function(position){
				var myLat = (position.coords.latitude).toString();
				var myLon = (position.coords.longitude).toString();
				var url = 'http://localhost:1234/search?term=food&ll=' + myLat + ',' + myLon;
				var method = 'GET'	
				$.ajax({
						url: url,
						type: method,
					}).then(function(data){
						return deferred.resolve(data);
					})		
			})
			return deferred.promise;
		}
	}
	angular
		.module("Out2Eat")
		.service("RestaurantService", RestaurantService);
}