<link rel="stylesheet" type="text/css" href="../style/datepickk.min.css"/>
<link rel="stylesheet" type="text/css" href="../style/bootstrap.min.css"/>
<div class="row">
    <div class="col-md-12">
        <h1>Book a time slot for consultation</h1>
    </div>
</div>
<div class="row">
    <div class="col-md-6">
        <div class="datepicker"></div>
    </div>
    
    <div class="col-md-6">
        <form id="bookingForm" action="bookingConfirmation.php" method="get">
            <fieldset>
                <legend><h1>Booking Information</h1></legend>
                <div class="row">
                    <div class="col-md-12">
                        <h2>Date</h2>
                        <p class="strDate"></p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <h2>Time</h2>
                        <select>
                            <option>8.00 am</option>
                            <option>10.00 am</option>
                            <option>1.00 pm</option>
                            <option>3.00 pm</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <h3>Service Type</h3>
                        <select>
                            <option>Wedding dress renting service</option>
                            <option>Photography service</option>
                            <option>Wedding service</option>
                        </select>
                        <br/>
                    </div>
                </div>
            </fieldset>
            
            <fieldset>
                <legend><h1>Personal Information</h1></legend>
                
                <div class="row">
                    <div class="col-md-12">
                    Name:<input type="text"/>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-12">
                    Email:<input type="text"/>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-12">
                    Phone Number:<input type="text"/>
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
            $('.strDate').html(this.toLocaleDateString());
        },
        maxSelections:1,
        minDate: new Date(now.getFullYear(),now.getMonth(),now.getDate())
    });
</script>