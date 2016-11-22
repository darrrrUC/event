app.controller('HomeController', ['$scope', 'locations', function($scope, locations){
	$scope.locations = locations.posts;

	$scope.addSuggestion = function(){
		if (!$scope.name || $scope.name === "") {
			return;
			};
		$scope.locations.push(
		{
			name: $scope.name,
			place: $scope.place,
			placeID: $scope.locations.length,
			events: [],
		}
		);
		$scope.name = "";
		$scope.place ="";
	};

	$scope.addEventDetails = function(){
		if ((!$scope.details || $scope.details === "") || (!$scope.putInId || $scope.putInId === "")) {
			return;
		};
		$scope.locations[$scope.putInId].events.push(
			$scope.details
		);

		$scope.details ="";
		$scope.putInId ="";

	};

}]);
