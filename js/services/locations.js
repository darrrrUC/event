app.factory('locations', [function(){
	var locs = 
	{
		posts: 
		[
		{
			name: 'Main Stage',
			place: 'Hall A',
			placeID: 0,
			events: ["event1.1", "event1.2"],

		},
		{
			name: 'Panel Stage',
			place: 'Hall B',
			placeID: 1,
			events: ["event2.1", "event2.2"],
		},
		{
			name: 'Warlords Finals',
			place: 'Hall A',
			placeID: 2,
			events: ["event3.1", "event3.2", "event3.3"],
		},
		]
	};

	return locs;
}]);

//todo create a web-api and return json objects from database.