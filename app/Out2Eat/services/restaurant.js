var Out2Eat;
(function (Out2Eat) {
    var RestaurantService = (function () {
        function RestaurantService($q, LocateService) {
            this.$q = $q;
            this.LocateService = LocateService;
        }
        RestaurantService.prototype.listRestaurants = function () {
            var deferred = this.$q.defer();
            this.LocateService.currentLocation().then(function (position) {
                var myLat = (position.coords.latitude).toString();
                var myLon = (position.coords.longitude).toString();
                var url = 'http://localhost:1234/search?term=food&ll=' + myLat + ',' + myLon;
                var method = 'GET';
                $.ajax({
                    url: url,
                    type: method,
                }).then(function (data) {
                    return deferred.resolve(data);
                });
            });
            return deferred.promise;
        };
        RestaurantService.$inject = ["$q", "LocateService"];
        return RestaurantService;
    })();
    Out2Eat.RestaurantService = RestaurantService;
    angular
        .module("Out2Eat")
        .service("RestaurantService", RestaurantService);
})(Out2Eat || (Out2Eat = {}));
