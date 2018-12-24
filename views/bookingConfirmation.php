<!DOCTYPE html>
<html lang="en" data-ng-app="weddingStudio">
    
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="../style/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="../style/style.css" />
    </head>
    
    <body data-ng-controller="bookingConfirmCtrl">
        <div class="row">
            <div class="col-md-12">
                <h1>Booking confirmation</h1>
            </div>
        </div>
        
        <div class="row">
            <div class=col-md-12>

                <table class="table" border="1">
                    <caption><h2>Booking Information</h2></caption>
                    
                    <tr>
                        <th>Name</th>
                        <td>{{bName}}</td>
                    </tr>
                    
                    <tr>
                        <th>Email</th>
                        <td>{{bEmail}}</td>
                    </tr>
                    
                    <tr>
                        <th>Phone Number</th>
                        <td>{{bPhone}}</td>
                    </tr>
                    
                    <tr>
                        <th>Booking Date</th>
                        <td>{{bDate}}</td>
                    </tr>
                    
                    <tr>
                        <th>Booking Time</th>
                        <td>{{bTime}}</td>
                    </tr>
                    
                    <tr>
                        <th>Booking Service</th>
                        <td>{{bService}}</td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-12">
                <P>The confirmation information will send to your email, please wait kindly</P>
            </div>
        </div>
        
        <script src="../scripts/angular-1.6.9/angular.min.js"></script>
        <script src="../scripts/angular-1.6.9/angular-route.min.js"></script>
        <script src="../scripts/jquery.min.js"></script>
        <script src="../scripts/jquery.cookie.js"></script>
        <script src="../scripts/weddingStudio.js"></script>
        <script src="../scripts/bootstrap.min.js"></script>
        
    </body>
</html>