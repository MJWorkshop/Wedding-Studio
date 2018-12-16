var app=angular.module('weddingStudio',['ngRoute']);

app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/",{
        templateUrl:"views/home.html"
    })
    .when("/home",{
        templateUrl:"views/home.html"
    })
    .when("/booking",{
        templateUrl:"views/booking.php"
    })
    .when("/about",{
        templateUrl:"views/home.html"
    })
});