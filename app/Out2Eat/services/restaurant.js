var request_data = {
    url: 'http://localhost:1234/search?term=food&location=San+Francisco',
    method: 'GET'
};
var Out2Eat;
(function (Out2Eat) {
    var RestaurantService = (function () {
        function RestaurantService($http, LocateService) {
            this.$http = $http;
            this.LocateService = LocateService;
        }
        RestaurantService.prototype.listRestaurants = function () {
            $.ajax({
                url: request_data.url,
                type: request_data.method,
            }).done(function (data) {
                console.log(data);
            });
        };
        RestaurantService.$inject = ["$http", "LocateService"];
        return RestaurantService;
    })();
    Out2Eat.RestaurantService = RestaurantService;
    angular
        .module("Out2Eat")
        .service("RestaurantService", RestaurantService);
})(Out2Eat || (Out2Eat = {}));
