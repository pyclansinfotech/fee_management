jQuery(document).ready(function($) {
    
  //Manager form validations
    $('#manager_form').bootstrapValidator({
        feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          //invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
              manager_name: {
                validators: {
                    notEmpty: {
                        message: 'Please enter name'
                    },
                    regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: 'The user name can consist of alphabetical characters and spaces only'
                    }
                }
            },
            manager_username: {
                validators: {
                    notEmpty: {
                        message: 'Please enter username'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    }
                }
            },
            manager_email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    }
                }
            },
            manager_phone_no: {
                validators: {
                    notEmpty: {
                        message: 'The phone no is required and cannot be empty'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
            manager_password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    regexp: {
                        regexp: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$@!%?&]).{6,12}$',
                        message: 'The pswd should contain min 6 & max 12 char at least 1 Upper & Lower Alpha, 1 num & 1 Special Char.'
                    },
                    identical: {
                        field: 'manager_confirmPswrd',
                        message: 'password and confirm password does not match'
                    }
                }
            },
            manager_confirmPswrd: {
                validators: {
                    notEmpty: {
                        message: 'The confirm password is required and can\'t be empty'
                    },
                    identical: {
                        field: 'manager_password',
                        message: 'password and confirm password does not match'
                    }
                }
            },
            manager_center: {
                validators: {
                    notEmpty: {
                        message: 'Please select one center'
                    },
                }
            },
            manager_batch: {
                validators: {
                    notEmpty: {
                        message: 'Please select one batch'
                    },
                }
            }
        }
    });




$("#regMangBtn").click(function(){
        
        if ($('#manager_form').bootstrapValidator('validate').has('.has-error').length) {
           
            } 
        else {
            var formData = new FormData($('#manager_form')[0]);           
            $.ajax({
                    type: 'POST',
                    url: '/ManagerRegister/',
                    data:formData,
                    processData: false, // tell jQuery not to process the data
                    contentType: false,

                     success: function(json) {
                        console.log(">>>>>>>>>>>>>>>>>>=",json)
                        // return false;
                        if(json=='success')
                         {
                            window.location.href= "/AdminDashboard/";
                         }
                         else if(json=="user already registered")
                            {    
                                  $('#msgdataAlert').html('Manager already registered');
                                  $("#dataAlert").fadeTo(2000, 500).slideUp(500, function() {
                                  $("#dataAlert").slideUp(1000);
                                });
                              }


                            else {    
                                  $('#msgdataAlert').html('Wrong Credentials');
                                  $("#dataAlert").fadeTo(2000, 500).slideUp(500, function() {
                                  $("#dataAlert").slideUp(1000);
                                });

                            } //inner else
                         
                     }//success
                 });//ajax

            }//else




    });//btn

});



























