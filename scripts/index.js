var app = angular.module("hillsongApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	'use strict';
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/', {
		templateUrl: 'home.html',
        controller: 'mainCtrl'
	})
	.when('/home', {
		templateUrl: 'home.html',
        controller: 'mainCtrl'
	})
//    .when('/about', {
//        controller: 'aboutCtrl'
//    })
	.when('/booking', {
		templateUrl: function () {
			return 'booking.html';
		},
		controller: 'bookingCtrl'
	})
	.otherwise({
		templateUrl: 'home.html',
        controller: 'mainCtrl'
	});
});

app.controller('mainCtrl', function($scope) {
    $(document).ready(function(){
                window.sr = new ScrollReveal({reset: true, mobile: true});
                sr.reveal($('.mainTitle'), {duration: 1000, delay: 500});
                sr.reveal($('.subTitle'), {duration: 600, delay: 1000});
                sr.reveal($('nav'), {origin: 'left', distance: '100vw'});
                sr.reveal($('.sectionTitle'));
                sr.reveal($('.sectionContent'), {delay: 500});
                sr.reveal($('.product'), {duration: 500});
                sr.reveal($('.svgLogo'), {delay: 1500, duration: 1500});
                
                $('#nav').localScroll(800);
	
                $('#intro').parallax("50%", 0.3);
                $('#third').parallax("50%", 0.3);
                
                //$('.svgLogo').load('logo.html');
                
            });
        $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: (target.offset().top - 20)
            }, 1000);
        }
    });
});

//app.controller('aboutCtrl', function($scope) {
//            $('html, body').stop().animate({
//                scrollTop: ($('#about').offset().top - 20)
//            }, 1000);
//});