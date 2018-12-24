var app=angular.module('weddingStudio',['ngRoute']);

app.controller("myController", function($scope,$http){
    /**$http.get("../content/content.json")
    .success(function (data){
        $scope.service = data.ServiceType;
       
    })
    .error(function (data){
        console.log("Load Data Error");
    });**/
    
    $http({
        method: 'get', 
        url: 'content/content.json'
    }).then(function (response) {
        data = response.data;
        $scope.service = data.serviceType;
    },function (error){
        console.log(error, 'can not get data.');
    });
});

app.controller("bookingCtrl", function($scope, $http) {
    
    //datepicker function
    var now = new Date();
    var datepicker = new Datepickk({
        container: document.querySelector('.datepicker'),
        inline:true,
        range:false,
        onSelect:function(checked){
            var state = (checked) ? 'selected': 'unselected';
            //window.alert(this.toLocaleDateString());
            $('.strDate').val(this.toLocaleDateString());
//            console.log($('.strDate'));
            //console.log(this.toLocaleDateString());
            //$('.strDate').value = this.toLocaleDateString();
        },
        maxSelections:1,
        minDate: new Date(now.getFullYear(),now.getMonth(),now.getDate())
    });
    
    //backend
    $('.btnBookingConfirm').on('click',function(){
        $http({
            method:'POST',
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            url:'auth/database/backend.php?module=bookingform',
            data:$.param({"bName":$scope.bName, "bEmail":$scope.bEmail,"bPhone":$scope.bPhone, "bDate":$scope.bDate, "bTime":$scope.bTime,"bService":$scope.bService,"bDesc":$scope.bDesc})
        }).then(function successCallback(response){
           var mes = response.data.result;
            if (mes === "Failed!")
                window.alert(mes);
            else if(mes === "Success!"){ 
                //write cookie
                $.cookie('bName', $scope.bName);
                $.cookie('bEmail', $scope.bEmail);
                $.cookie('bPhone', $scope.bPhone);
                $.cookie('bDate',$scope.bDate);
                $.cookie('bTime',$scope.bTime);
                $.cookie('bService',$scope.bService);
                        
                
                window.location.href = "views/bookingConfirmation.php";
            }
        });
    })
    
    
    
});

app.controller("bookingConfirmCtrl",function($scope){
    //read cookie
    $scope.bName = $.cookie('bName');
    $scope.bPhone = $.cookie('bPhone');
    $scope.bEmail = $.cookie('bEmail');
    $scope.bDate = $.cookie('bDate');
    $scope.bTime = $.cookie('bTime');
    $scope.bService = $.cookie('bService');
});



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
    .when("/services",{
        templateUrl:"views/home.html"
    })
    .when("/gallery",{
        templateUrl:"views/home.html"
    })
});