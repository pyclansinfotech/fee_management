


jQuery(document).ready(function($) {  

    $('#login_form').bootstrapValidator({


     // container: '#messages',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: ' * The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: ' * The email address is not valid'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: ' * password cannot be empty'
                    }
                }
            }
            
        }
    });




    $("#fee_login").click(function(){
                if ($('#login_form').bootstrapValidator('validate').has('.has-error').length) {
                   
                    } 
                else {


                    var $captcha = $( '#recaptcha' ),
                    response = grecaptcha.getResponse();

                    if (response.length === 0){
                            $( '.msg-error').text( "reCAPTCHA is mandatory" );
                            if( !$captcha.hasClass( "error" ) ){
                                $captcha.addClass( "error" );
                            }

                        }
                    else {

                        // $( '.msg-error' ).text('');
                        // $captcha.removeClass( "error" );

                        
                        var formData = new FormData($('#login_form')[0]);
                            $.ajax({

                            type: 'POST',
                            url: '/',
                            data:formData,
                            processData: false, // tell jQuery not to process the data
                            contentType: false,
                            // dataType: 'json',
                            success: function(data) {
                                console.log("data==============",data)
                            if(data=='success')
                               {
                                window.location.href = "/ManagerDashboard/";
                                }
                            else if(data=='Admin')  
                            {

                              window.location.href = "/AdminDashboard/";
                            }  

                            else if(data=='cred_error')
                                {
                                $('#msgdataAlert').html('Email does not exist. Please enter valid Email');
                                $("#dataAlert").fadeTo(2000, 500).slideUp(500, function() {
                                $("#dataAlert").slideUp(1000);                                
                                });                                
                                }

                            else
                                {    
                                  $('#msgdataAlert').html('Wrong Password');
                                  $("#dataAlert").fadeTo(2000, 500).slideUp(500, function() {
                                  $("#dataAlert").slideUp(1000);
                                });

                                } 


                                }//success
                            });//ajax
                        }//inner else

                    }//else


    });//btn
});//read doc




































