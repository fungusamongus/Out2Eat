module Out2Eat {
	class HomeController {
		static $inject = ["LocateService", "RestaurantService", "$q"];
			constructor(private LocateService, private RestaurantService, private $q: ng.IQService) {
				
			}
			public vegetarian: boolean = false;
			public offsetValue: number = 0;
			public rangeValue: number = 12;
			private foodList = [];
			private randomRestaurant = [];
			private loading: boolean = false;
			findFood(){
				this.loading = true;
				var that = this;
				var randomRestaurant = [];
				var foodList = [];
				this.RestaurantService.listRestaurants(this.rangeValue, this.vegetarian).then(function(data){
					for (var i = 0; i < data.length; i++) {
						var foodInfo = {
								name: '',
								rating_img_url: '',
								url: ''
							}
						foodInfo.name = data[i].name;
						foodInfo.rating_img_url = data[i].rating_img_url;
						foodInfo.url = data[i].url;
						foodList.push(foodInfo);
						
					}
					that.foodList = foodList
					console.log(that.foodList);
					randomRestaurant.push(foodList[(Math.floor(Math.random() * that.foodList.length))]);
					that.randomRestaurant = randomRestaurant;
					that.loading = false;
				})
				
			}
	}
	
	angular
		.module("Out2Eat")
		.controller("HomeController", HomeController);
}

