  
jQuery(document).ready(function($) {
    // alert("333333333333333333");
  // $("#cen_validTill").datepicker({orientation:"bottom"});
  //  // var birthdate = birthday.replace(/(..).(..).(....)/, "$3-$1-$2");


    $('#centerForm').bootstrapValidator({


     // container: '#messages',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            cen_name: {
                validators: {
                    notEmpty: {
                        message: ' * Center name cannot be empty'
                    }
                }
            },
            cen_email: {
                validators: {
                    notEmpty: {
                        message: ' * The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: ' * The email address is not valid'
                    }
                }
            },
            cen_postcode: {
                validators: {
                    notEmpty: {
                        message: ' * The Post Code is required and cannot be empty'
                    },
                    stringLength: {
                        max: 10,
                        message: '* The title must be less than 10 characters long'
                    }
                }
            },
            cen_address1: {
                validators: {
                    // regexp: {
                    //     regexp: /^[a-z\s]+$/i,
                    //     message: '* The address can consist of alphabetical characters and spaces only'
                    // },

                    notEmpty: {
                        message: '* The Address is required and cannot be empty'
                    },
                    stringLength: {
                        max: 500,
                        message: '* The content must be less than 100 characters long'
                    }
                }
            },
            cen_address2: {
                validators: {
                    notEmpty: {
                        message: '* The Address is required and cannot be empty'
                    },
                    stringLength: {
                        max: 500,
                        message: '* The content must be less than 100 characters long'
                    }
                }
            },
            cen_phone1: {
                validators: {
                    notEmpty: {
                        message: '* The Phone number is required and cannot be empty'
                    },
                    stringLength: {
                        max: 500,
                        message: '* The content must be less than 15 characters long'
                    }
                }
            },
            cen_phone2: {
                validators: {
                    notEmpty: {
                        message: '* The Phone number is required and cannot be empty'
                    },
                    stringLength: {
                        max: 500,
                        message: '* The content must be less than 15 characters long'
                    }
                }
            },


              cen_manager: {
                validators: {
                    notEmpty: {
                        message: '* The manager is required and cannot be empty'
                    },
                    
                }
            },
            cen_status: {
                validators: {
                    notEmpty: {
                        message: 'The status  is required and cannot be empty'
                    },
                    
                }
            },
              cen_Type: {
                validators: {
                    notEmpty: {
                        message: 'The Center Type is required and cannot be empty'
                    },
                    stringLength: {
                        max: 500,
                        message: 'The content must be less than 15 characters long'
                    }
                }
            },
            cen_validTill: {
                validators: {
                    notEmpty: {
                        message: 'The Valid till field is required and cannot be empty'
                    },
                    
                }
            }
             


        }
    });

$('#cen_validTill').on('changeDate show', function(e) {
$('#centerForm').bootstrapValidator('revalidateField', 'cen_validTill');
});
    $("#createCenter").click(function(){
        
        if ($('#centerForm').bootstrapValidator('validate').has('.has-error').length) {
            
            } 
        else {
            var formData = new FormData($('#centerForm')[0]);           
            $.ajax({
                    type: 'POST',
                    url: '/CreateCenter/',
                    data:formData,
                    processData: false, // tell jQuery not to process the data
                    contentType: false,

                     success: function(json) {
                        if(json=='success')
                         {
                            window.location.href= "/AdminDashboard/";
                         }
                          else
                                {    
                                  $('#msgdataAlert').html('Wrong Credentials');
                                  $("#dataAlert").fadeTo(2000, 500).slideUp(500, function() {
                                  $("#dataAlert").slideUp(1000);
                                });

                            } //inner else
                         
                     }//success
                 });//ajax

            }//else
    });


});
  


