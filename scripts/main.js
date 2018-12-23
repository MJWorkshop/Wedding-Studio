var app = angular.module("wsApp", ['ngRoute', 'ui.bootstrap']);

/*
    -Pagination
*/
app.filter('offset', function () {
    'use strict';
    return function (input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    };
});

app.service('storeService', function($http) {
    var info;
    
    return {
        getInfo: getInfo,
        setInfo: setInfo
    };
    
    function getInfo() {
        return info;
    }
    
    function setInfo(value) {
        info = value;
    }
});

app.directive('editable', function () {
    return function (scope, elem, attrs) {
        scope.sho = true;
        scope.choose = function () {
            scope.sho = !scope.sho;
        }
    }
});

app.controller('mainController', function ($scope, $http, storeService) {
    
});

app.controller('profileController', function($scope, $http, $filter) {
    
    $scope.currentPage = 1; //Initial current page to 1
    $scope.itemsPerPage = 1; //Record number each page
    $scope.maxSize = 10; //Show the number in page
    
    $http({
        method: 'GET',
        url: '../database/backend.php?module=profile&action=load'
    }).then(function successCallback(response){
        $scope.searchProfileFilter = '';
        $scope.profileList = response.data.result;
        $scope.filterProfileList = [];
        
        $scope.searchProfileMS = function (profile) {
            return (profile.id + profile.name).indexOf($scope.searchProfileFilter.toUpperCase()) >= 0;//toUpperCase()
        };
        
        $.each($scope.profileList, function(index){
            $scope.filterProfileList.push({"id": $scope.profileList[index].id, "name": $scope.profileList[index].name});
        });
        
        $scope.totalItems = $scope.filterProfileList.length;
        
        $scope.getData = function () {
            return $filter('filter')($scope.filterProfileList, $scope.searchProfileFilter);
        }

        $scope.$watch('searchProfileFilter', function(newVal, oldVal) {
            var vm = this;
            if (oldVal != newVal) {
                $scope.currentPage = 1;
                $scope.totalItems = $scope.getData().length;
            }
            return vm;
        }, true);
        
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
        $scope.email = $scope.profileDetail.email;
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
        $scope.rdoGender = $scope.profileDetail.gender;
        $scope.contact = $scope.profileDetail.contact;
        $scope.email = $scope.profileDetail.email;
        $scope.status = $scope.profileDetail.status;
        $scope.level = $scope.profileDetail.level;
    });
    
    $('.btnback').on('click', function(){
        window.location.href = '#profile';
    });
    
    $('.btnSave').on('click', function() {
        $http({
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: '../database/backend.php?module=profile&action=update&id=' + $scope.id,
            data: $.param({"name": $scope.name, "nric": $scope.nric, "gender": $scope.rdoGender, "contact": $scope.contact, "email": $scope.email, "status": $scope.status, "level": $scope.level})
        }).then(function successCallback(response) {
            var mes = response.data.result;
            if (mes === "Failed!")
                window.alert(mes);
            else if (mes === "Success!")
                window.location.href = '#profile';
        });
    })
});

app.controller('viewMyProfileController', function ($scope, $http, $compile) {
    var id = $.cookie('id');
    
    $http({
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url: '../database/backend.php?module=self',
        data: $.param({"id": id})
    }).then(function successCallback(response) {
        var myProfile = response.data;
        
        $scope.id = myProfile.id;
        $scope.name = myProfile.name;
        $scope.nric = myProfile.nric;
        $scope.rdoGender = myProfile.gender;
        if ($scope.rdoGender == 'M')
            $scope.strGender = "Male";
        else if ($scope.rdoGender == 'F')
            $scope.strGender = "Female";
        $scope.contact = myProfile.contact;
        $scope.email = myProfile.email;
    });
    
    $(document).on('click', 'button.btnEditSelf', function() {
        $(this).text('Save').removeClass('btnEditSelf').removeClass('btn-primary').addClass('btnSaveSelf').addClass('btn-warning');
        $('.btnBackSelf').replaceWith($compile('<button class="btn btn-default btnCancelSelf" data-ng-click="choose();">Cancel</button>')($scope));
    });
    
    $(document).on('click', 'button.btnSaveSelf', function() {
        $(this).text('Edit').removeClass('btnSaveSelf').removeClass('btn-warning').addClass('btnEditSelf').addClass('btn-primary');
        $('.btnCancelSelf').replaceWith('<button class="btn btn-default btnBackSelf">Back</button>');
        
        $http({
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        })
        
    });
    
    $(document).on('click', 'button.btnCancelSelf', function() {
        $('.btnSaveSelf').text('Edit').removeClass('btnSaveSelf').removeClass('btn-warning').addClass('btnEditSelf').addClass('btn-primary');
        $(this).replaceWith('<button class="btn btn-default btnBackSelf">Back</button>');
    });
});