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

app.controller("bookingCtrl", function($scope) {
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