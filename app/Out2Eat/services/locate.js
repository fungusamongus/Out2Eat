var Out2Eat;
(function (Out2Eat) {
    var LocateService = (function () {
        function LocateService() {
        }
        LocateService.prototype.currentLocation = function () {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
            });
        };
        LocateService.$inject = [];
        return LocateService;
    })();
    Out2Eat.LocateService = LocateService;
    angular
        .module("Out2Eat")
        .service("LocateService", LocateService);
})(Out2Eat || (Out2Eat = {}));
