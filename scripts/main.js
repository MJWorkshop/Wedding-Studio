var app = angular.module("wsApp", ['ngRoute']);

app.controller('profileController', function($scope) {
    $('.btnAction').on('click', function(e) {
        var profile = $(this).data("profile");
        var action = $(this).data("action");
        window.location.href = '#/profile/' + action + '/' + profile;
    });
});

app.controller('bookingController', function($scope) {
    $('.btnAction').on('click', function() {
        var booking = $(this).data("booking");
        var action = $(this).data("action");
        window.location.href = '#booking/' + action + '/' + booking;
    });
});