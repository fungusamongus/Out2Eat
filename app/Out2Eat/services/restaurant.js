var Out2Eat;
(function (Out2Eat) {
    var RestaurantService = (function () {
        function RestaurantService($http, LocateService) {
            this.$http = $http;
            this.LocateService = LocateService;
        }
        RestaurantService.prototype.listRestaurants = function () {
            navigator.geolocation.getCurrentPosition(function (position) {
                var myLat = (position.coords.latitude).toString();
                var myLon = (position.coords.longitude).toString();
                var url = 'http://localhost:1234/search?term=food&ll=' + myLat + ',' + myLon;
                var method = 'GET';
                console.log(myLat);
                console.log(myLon);
                console.log(url);
                $.ajax({
                    url: url,
                    type: method,
                }).then(function (data) {
                    console.log(data);
                });
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
