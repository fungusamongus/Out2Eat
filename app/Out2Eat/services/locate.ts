module Out2Eat {
	export class LocateService {
		static $inject = [];
		constructor(){
		}
		//Web API call to find location
		currentLocation(){
			navigator.geolocation.getCurrentPosition(function(position: any){
				console.log(position);
			})
		}
	}
	angular
		.module("Out2Eat")
		.service("LocateService", LocateService);	
}