
var oauth = OAuth({
	consumer: {
		public: 'GgvlroOhB4Oa7JqRmxD1dA',
		secret: 'J0fG66rBTNT_TwimoYa8ZmD2iI8'
	},
	signature_method: 'HMAC-SHA1'
});
var request_data = {
	url: 'https://api.yelp.com/v2/search?term=food&location=San+Francisco',
	method: 'GET'
}
var token = {
	public: '6_cj--NmfEeV8w5rxasoNN0TKkpt07sw',
	secret: '2kZJQTftiQDIKdZC0Qg2hvejLGA'
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
				data: oauth.authorize(request_data, token)
			}).done(function(data) {
				console.log(data);
			})
		}
	}
	angular
		.module("Out2Eat")
		.service("RestaurantService", RestaurantService);
}