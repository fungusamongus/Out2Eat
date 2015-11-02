var Out2Eat;
(function (Out2Eat) {
    var RestaurantService = (function () {
        function RestaurantService($http, LoacateService) {
            this.$http = $http;
            this.LoacateService = LoacateService;
        }
        RestaurantService.$inject = ["http", "LocateService"];
        return RestaurantService;
    })();
    Out2Eat.RestaurantService = RestaurantService;
    angular
        .module("Out2Eat")
        .service("RestaurantService", RestaurantService);
})(Out2Eat || (Out2Eat = {}));
