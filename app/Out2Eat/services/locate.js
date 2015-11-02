var Out2Eat;
(function (Out2Eat) {
    var LocateService = (function () {
        function LocateService($http) {
            this.$http = $http;
        }
        LocateService.$inject = ["$http"];
        return LocateService;
    })();
    Out2Eat.LocateService = LocateService;
    angular
        .module("Out2Eat")
        .service("LocateService", LocateService);
})(Out2Eat || (Out2Eat = {}));
