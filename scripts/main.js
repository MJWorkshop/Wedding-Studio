var app = angular.module("wsApp", ['ngRoute']);

app.controller('profileController', function($scope, $http) {
    $http({
        method: 'GET',
        url: '../database/backend.php?module=profile&action=load'
    }).then(function successCallback(response){
        $scope.profileList = response.data.result;
        
        $(document).on('click', 'button.btnAction', function() {
            var profile = $(this).data("profile");
            var action = $(this).data("action");
            window.location.href = '#/profile/' + action + '/' + profile;
        });
    });
});

app.controller('bookingController', function($scope, $http) {
    $http({
        method: 'GET',
        url: '../database/backend.php?module=booking&action=load'
    }).then(function successCallback(response) {
        $scope.bookingList = response.data.result;
        
        $(document).on('click', 'button.btnAction', function() {
            var booking = $(this).data("booking");
            var action = $(this).data("action");
            window.location.href = '#booking/' + action + '/' + booking;
        });
    });
});

app.controller('bookingViewController', function($scope, $http, $routeParams) {
    var id = $routeParams.id;
    $http({
        method: 'GET',
        url: '../database/backend.php?module=booking&action=details&id=' + id
    }).then(function successCallback(response) {
        $scope.bookingDetail = response.data;
        $scope.bookingID = $scope.bookingDetail.id;
        $scope.bookingCategory = $scope.bookingDetail.category;
        $scope.ownerName = $scope.bookingDetail.owner;
        $scope.bookingDate = $scope.bookingDetail.date;
        $scope.bookingStartTime = $scope.bookingDetail.start;
        $scope.bookingEndTime = $scope.bookingDetail.end;
        $scope.bookingDescription = $scope.bookingDetail.description;
    });
    
    $('.btnback').on('click', function(){
        window.location.href = '#booking';
    });
});

app.controller('profileViewController', function($scope, $http, $routeParams) {
    var id = $routeParams.id;
    
    $http({
        method: 'GET',
        url: '../database/backend.php?module=profile&action=details&id=' + id
    }).then(function successCallback(response) {
        $scope.profileDetail = response.data;
        $scope.id = $scope.profileDetail.id;
        $scope.name = $scope.profileDetail.name;
        $scope.nric = $scope.profileDetail.nric;
        if ($scope.profileDetail.gender == "M")
            $scope.gender = "Male";
        else if ($scope.profileDetail.gender == "F")
            $scope.gender = "Female";
        else
            $scope.gender = "Undefined";
        $scope.contact = $scope.profileDetail.contact;
    });
    
    $('.btnback').on('click', function(){
        window.location.href = '#profile';
    });
});

app.controller('profileEditController', function($scope, $http, $routeParams) {
    var id = $routeParams.id;
    
    $http({
        method: 'GET',
        url: '../database/backend.php?module=profile&action=details&id=' + id
    }).then(function successCallback(response) {
        $scope.profileDetail = response.data;
        $scope.id = $scope.profileDetail.id;
        $scope.name = $scope.profileDetail.name;
        $scope.nric = $scope.profileDetail.nric;
        if ($scope.profileDetail.gender == "M")
            $scope.gender = "Male";
        else if ($scope.profileDetail.gender == "F")
            $scope.gender = "Female";
        else
            $scope.gender = "Undefined";
        $scope.contact = $scope.profileDetail.contact;
    });
    
    $('.btnback').on('click', function(){
        window.location.href = '#profile';
    });
});