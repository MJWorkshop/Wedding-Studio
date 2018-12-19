app.config(function($routeProvider, $locationProvider){
	'use strict';
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/', {
		templateUrl: 'dashboard.html'
	})
	.when('/dashboard', {
		templateUrl: 'dashboard.html'
	})
    .when('/booking', {
        templateUrl: function() {
            return 'booking.html?' + new Date();
        },
        controller: 'bookingController'
    })
    .when('/booking/view/:id', {
        templateUrl: function() {
            return 'bookingView.html?' + new Date();
        },
        controller: 'bookingViewController'
    })
    .when('/profile', {
        templateUrl: function() {
            return 'profile.html?' + new Date();
        },
        controller: 'profileController'
    })
    .when('/profile/edit/:id', {
        templateUrl: function() {
            return 'profileEdit.html?' + new Date();
        }
    })
    .when('/profile/view/:id', {
        templateUrl: function() {
            return 'profileView.html?' + new Date();
        }
    })
	.otherwise({
		templateUrl: 'error-404.html'
	});
});