
jQuery(document).ready(function($) {

    $('#example').DataTable({
        "paging": false,
        "ordering": false,
        "info":     false,
        "searching": false,

    });   


    $('#updateCenter').bootstrapValidator({

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
        });//validator


        $("#updateCenBtn").click(function(){
                var formData = new FormData($('#updateCenter')[0]); 
                var idcenter=$("#centerid").val();
                $.ajax({
                        type: 'POST',
                        url: '/updateCenter/'+idcenter+'/',
                        data:formData,
                        processData: false, // tell jQuery not to process the data
                        contentType: false,

                         success: function(data) {
                            console.log('data',data)

                            if(data=='success')
                             {
                                window.location.href= '/AdminDashboard/';
                             }
                              else
                                    {    
                                      $('#msgdataAlert').html('Please select field to update');
                                      $("#dataAlert").fadeTo(2000, 500).slideUp(500, function() {
                                      $("#dataAlert").slideUp(1000);
                                    });

                                } 
                             
                         }//success
                     }); 

        });



});