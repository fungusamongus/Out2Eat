module Out2Eat {
	export class LocateService {
		static $inject = ["$http"];
		constructor(private $http: ng.IHttpService){
		}
		//Web API call to find location
	}
	angular
		.module("Out2Eat")
		.service("LocateService", LocateService);	
}