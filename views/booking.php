<!DOCTYPE html>
<html>

<head>
<link rel="stylesheet" type="text/css" href="../style/datepickk.min.css"/>
<link rel="stylesheet" type="text/css" href="../style/bootstrap.min.css"/>
</head>
    
<body>

<div class="container">

<div class="row">
    <div class="col-md-12">
        <div class="datepicker"></div>
    </div>
    </div>
    <div class="row">
    <div class="col-md-12">
        <form id="bookingForm" action="bookingConfirmation.php" method="post">
            <fieldset>
                <legend><h1>Booking Information</h1></legend>
                <div class="row">
                    <div class="col-md-12">
                        <h2>Date</h2>
                        <input type="text" name="bDate" class="strDate form-control"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <h2>Time</h2>
                        <select class="form-control" name="bTime">
                            <option value="8.00 am">8.00 am</option>
                            <option value="10.00 am">10.00 am</option>
                            <option value="1.00 pm">1.00 pm</option>
                            <option value="3.00 pm">3.00 pm</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <h3>Service Type</h3>
                        <select class="form-control" name="bService">
                            <option value="Wedding dress renting service">Wedding dress renting service</option>
                            <option value="Photography service">Photography service</option>
                            <option value="Wedding service">Wedding service</option>
                        </select>
                        <br/>
                    </div>
                </div>
            </fieldset>
            
            <fieldset>
                <legend><h1>Personal Information</h1></legend>
                
              
                <div class="form-group">
                <div class="row">
                    <div class="col-md-1">
                        <label for="bName">Name:</label>
                    </div>
                    <div class="col-md-11">
                        <input class="form-control" type="text" name="bName" id="bName" />
                    </div>
                </div>
                </div>
         
                
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-1">
                            <label for="bEmail">Email:</label>
                        </div>
                        <div class="col-md-11">
                            <input class="form-control" id="bEmail" type="text" name="bEmail"/>
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-1">
                            <label for="bPhone">Phone Number:</label>
                        </div>
                        <div class="col-md-11">
                            <input class="form-control" id="bPhone" type="text" name="bPhone"/>
                        </div>
                    </div>
                </div>
                <br/> 
                
            </fieldset>
        </form>
        
        <div class="row">
            <div class="col-md-1"><button type="button" class="btn btn-danger btn-lg">Back</button></div>
            <div class="col-md-1 col-md-push-9"><button type="submit" form="bookingForm" class="btn btn-success btn-lg">Submit</button></div>
        </div>
            
        
    </div>
</div>

    </div>
<script src="../scripts/jquery.min.js"></script>
<script src="../scripts/datepickk.js"></script>

<!--datepicker js-->
<script type="text/javascript">
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
</script>
</body>
</html>