app.factory('locations', [function(){
	var locs = 
	{
		posts: 
		[
		{
			name: 'Main Stage',
			place: 'Hall A',
			placeID: 0,

		},
		{
			name: 'Panel Stage',
			place: 'Hall B',
			placeID: 1,
		},
		{
			name: 'Warlords Finals',
			place: 'Hall A',
			placeID: 2,
		},
		]
	};

	return locs;
}]);

//todo create a web-api and return json objects from database.