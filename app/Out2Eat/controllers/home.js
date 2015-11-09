var Out2Eat;
(function (Out2Eat) {
    var HomeController = (function () {
        function HomeController(LocateService, RestaurantService, $q) {
            this.LocateService = LocateService;
            this.RestaurantService = RestaurantService;
            this.$q = $q;
        }
        HomeController.prototype.findFood = function () {
            console.log("clacked");
            this.RestaurantService.listRestaurants().then(function (data) {
                console.log(data);
            });
        };
        HomeController.prototype.findMe = function () {
            this.LocateService.currentLocation().then(function (data) {
                console.log(data.coords);
            });
        };
        HomeController.$inject = ["LocateService", "RestaurantService", "$q"];
        return HomeController;
    })();
    angular
        .module("Out2Eat")
        .controller("HomeController", HomeController);
})(Out2Eat || (Out2Eat = {}));
