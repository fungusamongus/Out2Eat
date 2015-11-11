var Out2Eat;
(function (Out2Eat) {
    var HomeController = (function () {
        function HomeController(LocateService, RestaurantService, $q) {
            this.LocateService = LocateService;
            this.RestaurantService = RestaurantService;
            this.$q = $q;
            this.vegetarian = false;
            this.offsetValue = 0;
            this.rangeValue = 12;
            this.foodList = [];
            this.randomRestaurant = [];
            this.loading = false;
        }
        HomeController.prototype.findFood = function () {
            this.loading = true;
            var that = this;
            var randomRestaurant = [];
            var foodList = [];
            this.RestaurantService.listRestaurants(this.rangeValue, this.vegetarian).then(function (data) {
                for (var i = 0; i < data.length; i++) {
                    var foodInfo = {
                        name: '',
                        rating_img_url: '',
                        url: ''
                    };
                    foodInfo.name = data[i].name;
                    foodInfo.rating_img_url = data[i].rating_img_url;
                    foodInfo.url = data[i].url;
                    foodList.push(foodInfo);
                }
                that.foodList = foodList;
                console.log(that.foodList);
                randomRestaurant.push(foodList[(Math.floor(Math.random() * that.foodList.length))]);
                that.randomRestaurant = randomRestaurant;
                that.loading = false;
            });
        };
        HomeController.$inject = ["LocateService", "RestaurantService", "$q"];
        return HomeController;
    })();
    angular
        .module("Out2Eat")
        .controller("HomeController", HomeController);
})(Out2Eat || (Out2Eat = {}));
