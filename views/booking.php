<div class="container booking-page" data-ng-controller="bookingCtrl">
<div class="row">
    <div class="col-md-12">
        <div class="datepicker"></div>
    </div>
    </div>
    <div class="row">
    <div class="col-md-12">
        <form id="bookingForm" name="bookingForm" action="views/bookingConfirmation.php" method="post" novalidate>
            <fieldset>
                <legend><h1>Booking Information</h1></legend>
                <div class="row">
                    <div class="col-md-12">
                        <h2>Date</h2>
                        <input type="text" name="bDate" data-ng-model="bDate" class="strDate form-control"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <h2>Time</h2>
                        <select class="form-control" name="bTime" data-ng-model="bTime">
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
                        <select class="form-control" name="bService" data-ng-model="bService">
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
                   
                <div class="form-group has-feedback" data-ng-class="{'has-error':bookingForm.bName.$invalid && bookingForm.bName.$dirty, 'has-success':bookingForm.bName.$valid}">
                <div class="row">
                    <div class="col-md-1">
                        <label class="control-label" for="bName"><span class="text-danger">*</span>Name:</label>
                    </div>
                    <div class="col-md-11">
                        <input type="text" class="form-control" id="bName" data-ng-model="bName" name="bName"  pattern="[a-zA-Z]{1,}" required />
                        <span data-ng-show="bookingForm.bName.$invalid && bookingForm.bName.$dirty" class="glyphicon glyphicon-remove form-control-feedback"></span>
                        <span data-ng-show="bookingForm.bName.$valid" class="glyphicon glyphicon-ok form-control-feedback"></span>
                        <div class="text-danger" data-ng-show="bookingForm.bName.$error.required && bookingForm.bName.$dirty">Please fill in your name</div>
                        <div class="text-danger" data-ng-show="bookingForm.bName.$error.pattern && bookingForm.bName.$dirty">Letter only</div>
                    </div>
                </div>
                </div>
         
                
                <div class="form-group has-feedback" data-ng-class="{'has-error':bookingForm.bEmail.$invalid && bookingForm.bEmail.$dirty, 'has-success':bookingForm.bEmail.$valid}">
                    <div class="row">
                        <div class="col-md-1">
                            <label class="control-label" for="bEmail"><span class="text-danger">*</span>Email:</label>
                        </div>
                        <div class="col-md-11">
                            <input class="form-control" id="bEmail" type="text" name="bEmail" data-ng-model="bEmail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required/>
                            <span data-ng-show="bookingForm.bEmail.$invalid && bookingForm.bEmail.$dirty" class="glyphicon glyphicon-remove form-control-feedback"></span>
                            <span data-ng-show="bookingForm.bEmail.$valid" class="glyphicon glyphicon-ok form-control-feedback"></span>
                            <div class="text-danger" data-ng-show="bookingForm.bEmail.$error.pattern && bookingForm.bEmail.$dirty">Invalid email pattern</div>
                            <div class="text-danger" data-ng-show="bookingForm.bEmail.$error.required && bookingForm.bEmail.$dirty">Please fill in your email</div>
                        </div>
                    </div>
                </div>
                
                <div class="form-group has-feedback" data-ng-class="{'has-error':bookingForm.bPhone.$invalid && bookingForm.bPhone.$dirty, 'has-success':bookingForm.bPhone.$valid}">
                    <div class="row">
                        <div class="col-md-1">
                            <label class="control-label" for="bPhone"><span class="text-danger">*</span>Phone Number:</label>
                        </div>
                        <div class="col-md-11">
                            <input class="form-control" id="bPhone" type="text" name="bPhone" data-ng-model="bPhone" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" data-ng-minlength="8" maxlength="16" required />
                            <span data-ng-show="bookingForm.bPhone.$invalid && bookingForm.bPhone.$dirty" class="glyphicon glyphicon-remove form-control-feedback"></span>
                            <span data-ng-show="bookingForm.bPhone.$valid" class="glyphicon glyphicon-ok form-control-feedback"></span>
                            <div class="text-danger" data-ng-show="bookingForm.bPhone.$error.pattern && bookingForm.bPhone.$dirty">Invalid phone number pattern</div>
                            <div class="text-danger" data-ng-show="bookingForm.bPhone.$error.minlength && bookingForm.bPhone.$dirty">Number too short</div>
                            <div class="text-danger" data-ng-show="bookingForm.bPhone.$error.maxlength && bookingForm.bPhone.$dirty">Number too short</div>
                            <div class="text-danger" data-ng-show="bookingForm.bEmail.$error.required && bookingForm.bEmail.$dirty">Please fill in your phone</div>
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-1">
                            <label class="control-label" for="bDesc">Leave message/question here:</label>
                        </div>
                        <div class="col-md-11">
                            <textarea class="form-control" rows="5" id ="bDesc" name="bDesc" data-ng-model="bDesc"></textarea>
                        </div>
                    </div>
                </div>
                <br/> 
                
            </fieldset>
        </form>
        
        <div class="row">
            <div class="col-md-1"><button type="button" class="btn btn-danger btn-lg">Back</button></div>
            <div class="col-md-1 col-md-push-9"><button type="button"  class="btn btn-success btn-lg btnBookingConfirm">Submit</button></div>
        </div>
            
        
    </div>
</div>

    </div>