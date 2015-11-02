var Out2Eat;
(function (Out2Eat) {
    "use strict";
    function routes($routeProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "Out2Eat/views/home.html",
            controller: "HomeController",
            controllerAs: "vm"
        });
    }
    routes.$inject = ["$routeProvider"];
    angular
        .module("Out2Eat")
        .config(routes);
})(Out2Eat || (Out2Eat = {}));
