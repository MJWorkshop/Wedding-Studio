<!DOCTYPE html>
<html lang="en">
    
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="../style/bootstrap.min.css">
    </head>
    
    <body>
        <div class="row">
            <div class="col-md-12">
                <h1>Booking confirmation</h1>
            </div>
        </div>
        
        <div class="row">
            <div class=col-md-12>
                
                <?php
                    $bName = $_POST["bName"];
                    $bEmail = $_POST["bEmail"];
                    $bPhone = $_POST["bPhone"];
                    $bDate = $_POST["bDate"];
                    $bTime = $_POST["bTime"];
                    $bService = $_POST["bService"];
                ?>
                <table class="table" border="1">
                    <caption><h2>Booking Information</h2></caption>
                    
                    <tr>
                        <th>Name</th>
                        <td><?php echo $bName; ?></td>
                    </tr>
                    
                    <tr>
                        <th>Email</th>
                        <td><?php echo $bEmail; ?></td>
                    </tr>
                    
                    <tr>
                        <th>Phone Number</th>
                        <td><?php echo $bPhone; ?></td>
                    </tr>
                    
                    <tr>
                        <th>Booking Date</th>
                        <td><?php echo $bDate; ?></td>
                    </tr>
                    
                    <tr>
                        <th>Booking Time</th>
                        <td><?php echo $bTime; ?></td>
                    </tr>
                    
                    <tr>
                        <th>Booking Service</th>
                        <td><?php echo $bService; ?></td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-12">
                <P>The confirmation information will send to your email, please wait kindly</P>
            </div>
        </div>
    </body>
</html>