jQuery(document).ready(function($) {
	//Manager form validations
    $('#student_form').bootstrapValidator({
        feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          //invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
        },
        fields: {

        	stu_first_name: {
                validators: {
                    notEmpty: {
                        message: 'Please enter name'
                    },
                    regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: 'The first name can consist of alphabetical characters and spaces only'
                    }
                }
            },
            stu_second_name: {
                validators: {
                    notEmpty: {
                        message: 'Please enter name'
                    },
                    regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: 'The second name can consist of alphabetical characters and spaces only'
                    }
                }
            },
            stu_idLevel: {
                validators: {
                    notEmpty: {
                        message: 'The Level is required and cannot be empty'
                    },
                }
            },
            stu_idci: {
                validators: {
                    notEmpty: {
                        message: 'The CI is required and cannot be empty'
                    },
                }
            },
            stu_status: {
                validators: {
                    notEmpty: {
                        message: 'The status is required and cannot be empty'
                    },
                }
            },
            stu_idlevel_certified: {
                validators: {
                    notEmpty: {
                        message: 'The level certified is required and cannot be empty'
                    },
                }
            },
            stu_level_classes_done: {
                validators: {
                    notEmpty: {
                        message: 'The level classes done is required and cannot be empty'
                    },
                }
            },
            stu_school_type: {
                validators: {
                    notEmpty: {
                        message: 'Please selected one gender'
                    },
                }
            },
            stu_special_need: {
                validators: {
                    notEmpty: {
                        message: 'The special need is required and cannot be empty'
                    },
                }
            },
            stu_special_need_note: {
                validators: {
                    notEmpty: {
                        message: 'The special need note is required and cannot be empty'
                    },
                }
            },
            stu_class: {
                validators: {
                    notEmpty: {
                        message: 'The class is required and cannot be empty'
                    },
                }
            },
            stu_parent_name: {
                validators: {
                    notEmpty: {
                        message: 'Please enter name'
                    },
                    regexp: {
                        regexp: /^[a-z\s]+$/i,
                        message: 'The parent name can consist of alphabetical characters and spaces only'
                    }
                }
            },
            stu_phone1: {
                validators: {
                    notEmpty: {
                        message: 'The phone no1 is required and cannot be empty'
                    },
                    phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number1 with area code'
                    }
                }
            },
            stu_phone2: {
                validators: {
                    notEmpty: {
                        message: 'The phone no2 is required and cannot be empty'
                    },
                   phone: {
                        country: 'US',
                        message: 'Please supply a vaild phone number2 with area code'
                    }
                    
                }
            },
            stu_email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    }
                }
            },
            stu_address1: {
                validators: {
                    notEmpty: {
                        message: 'The address1 is required and cannot be empty'
                    },
                }
            },
            stu_address2: {
                validators: {
                    notEmpty: {
                        message: 'The address2 is required and cannot be empty'
                    },
                }
            },
            stu_postcode: {
                validators: {
                    notEmpty: {
                        message: 'The postcode is required and cannot be empty'
                    },
                }
            },
            stu_school_name: {
                validators: {
                    notEmpty: {
                        message: 'The school name is required and cannot be empty'
                    },
                }
            },
            stu_school_year: {
                validators: {
                    notEmpty: {
                        message: 'The school year is required and cannot be empty'
                    },
                }
            },
            stu_gender: {
                validators: {
                    notEmpty: {
                        message: 'Please selected one gender'
                    },
                }
            }
        }
    });

    $("#studentBtn").click(function(){


        if ($('#student_form').bootstrapValidator('validate').has('.has-error').length) {
           
        } 
        else {
             
                var formData = new FormData($('#student_form')[0]);
                $.ajax({
                        type: 'POST',
                        url: '/studentRegister/',
                        data:formData,
                        processData: false, // tell jQuery not to process the data
                        contentType: false,

                        success: function(json) {
                            console.log("data=",json)
                             if(json=='success')
                             {
                                window.location.href= "/ManagerDashboard/";
                             }
                              else
                                {    
                                  $('#msgdataAlert').html('Wrong Credentials');
                                  $("#dataAlert").fadeTo(2000, 500).slideUp(500, function() {
                                  $("#dataAlert").slideUp(1000);
                                });

                            } //inner else
                        }
                });//ajax

        }//else
 
    });//btn


});