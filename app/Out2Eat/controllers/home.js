var Out2Eat;
(function (Out2Eat) {
    var HomeController = (function () {
        function HomeController(LocateService, RestaurantService) {
            this.LocateService = LocateService;
            this.RestaurantService = RestaurantService;
        }
        HomeController.prototype.findFood = function () {
            console.log("clacked");
            this.RestaurantService.listRestaurants();
        };
        HomeController.$inject = ["LocateService", "RestaurantService"];
        return HomeController;
    })();
    angular
        .module("Out2Eat")
        .controller("HomeController", HomeController);
})(Out2Eat || (Out2Eat = {}));
