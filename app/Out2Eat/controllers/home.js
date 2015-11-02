var Out2Eat;
(function (Out2Eat) {
    var HomeController = (function () {
        function HomeController(locate) {
            this.locate = locate;
        }
        HomeController.$inject = ["LocateService"];
        return HomeController;
    })();
    angular
        .module("Out2Eat")
        .controller("HomeController", HomeController);
})(Out2Eat || (Out2Eat = {}));
