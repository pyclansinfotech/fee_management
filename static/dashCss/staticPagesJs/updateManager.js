jQuery(document).ready(function($) {

    $('#managerTable').DataTable({
        "paging": false,
        "ordering": false,
        "info":     false,
        "searching": false,

    }); 

     $('#managerUpdate_form').bootstrapValidator({
        feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          //invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
              manager_name_upd: {
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
            manager_username_upd: {
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
            manager_email_upd: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    }
                }
            },
            manager_phone_upd: {
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
            
            manager_center_upd: {
                validators: {
                    notEmpty: {
                        message: 'Please select one center'
                    },
                }
            },
            manager_batch_upd: {
                validators: {
                    notEmpty: {
                        message: 'Please select one batch'
                    },
                }
            }
        }
    });


        $("#updateBtnMang").click(function(){
            if ($('#updateBtnMang').bootstrapValidator('validate').has('.has-error').length) {
           
            } 
        else {   

                var formData = new FormData($('#managerUpdate_form')[0]); 
                var idmanager=$("#managerid").val();
                console.log("111111111=",idmanager) 
                // return false;              
                $.ajax({
                        type: 'POST',
                        url: '/updateManager/'+idmanager+'/',
                        data:formData,
                        processData: false, // tell jQuery not to process the data
                        contentType: false,
                        

                         success: function(data) {
                            console.log('data===========',data)
                            // return false;

                            if(data=='success')
                             {
                                window.location.href= '/manager/';
                             }
                              else
                                    {    
                                      $('#msgAlert').html('Please select field to update');
                                      $("#dataAlert").fadeTo(2000, 500).slideUp(500, function() {
                                      $("#dataAlert").slideUp(1000);
                                    });

                                } 
                             
                         }//success
                     }); //ajax
            }//else

        });//btn



});//doc