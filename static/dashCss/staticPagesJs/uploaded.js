

jQuery(document).ready(function($) {
    
 
   // var birthdate = birthday.replace(/(..).(..).(....)/, "$3-$1-$2");

    $('#uploaded_form').bootstrapValidator({


    // container: '#messages',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            upl_TranDate: {
                validators: {
                    notEmpty: {
                        message: ' * Transaction date cannot be empty'
                    }
                }
            },
            upl_RefTran1: {
                validators: {
                    notEmpty: {
                        message: ' * Transaction reference cannot be empty'
                    },
                    
                }
            },
            upl_RefTran2: {
                validators: {
                    notEmpty: {
                        message: ' *Transaction reference cannot be empty'
                    },
                    
                }
            },
             upl_RefTran3: {
                validators: {
                    notEmpty: {
                        message: ' * Transaction reference cannot be empty'
                    },
                    
                }
            },
            upl_RefTran4: {
                validators: {
                   

                    notEmpty: {
                        message: '* Transaction reference cannot be empty'
                    },
                    
                }
            },
            upl_Amount: {
                validators: {
                    notEmpty: {
                        message: '* The Amount is required and cannot be empty'
                    },
                    
                }
            },
            cen_status: {
                validators: {
                    notEmpty: {
                        message: '* Status is required'
                    },
                    
                }
            }
            

        }
    });


$('#upl_TranDate').on('changeDate show', function(e) {
$('#uploaded_form').bootstrapValidator('revalidateField', 'upl_TranDate');
});
    $("#submit").click(function(){

        if ($('#uploaded_form').bootstrapValidator('validate').has('.has-error').length) {
            // alert('SOMETHING WRONG');
            } 
        else {
            var formData = new FormData($('#uploaded_form')[0]);
            
            // return false;            
            var valid_till=$("#upl_TranDate").val();
          
            $.ajax({
                    type: 'POST',
                    url: '/upload/',
                    data:formData,
                    processData: false, // tell jQuery not to process the data
                    contentType: false,

                     success: function(json) {
                         if(json=='success'){
                            window.location.href= "/AdminDashboard/";
                         }
                          else
                                {    
                                  $('#msgdataAlert').html('Wrong Credentials');
                                  $("#dataAlert").fadeTo(2000, 500).slideUp(500, function() {
                                  $("#dataAlert").slideUp(1000);
                                });

                            } 


                     }
                 });

            }




        



    });




});
  


