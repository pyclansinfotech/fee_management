

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
            check_FromDate: {
                validators: {
                    notEmpty: {
                        message: ' * From date field cannot be empty'
                    }
                }
            },
            check_ToDate: {
                validators: {
                    notEmpty: {
                        message: ' * To date field cannot be empty'
                    },
                    
                }
            },
            check_Type: {
                validators: {
                    notEmpty: {
                        message: ' * Please choose the type'
                    },
                    
                }
            },
             check_FeeReceived: {
                validators: {
                    notEmpty: {
                        message: ' * Fee receive cannot be empty'
                    },
                    
                }
            },
            check_Description: {
                validators: {
                   

                    notEmpty: {
                        message: '* Description cannot be empty'
                    },
                    
                }
            },
            check_FeeChecked: {
                validators: {
                    notEmpty: {
                        message: '* Please check the fee field'
                    },
                    
                }
            },
            check_TranPending: {
                validators: {
                    notEmpty: {
                        message: '* Please check Treansaction Pending'
                    },
                    
                }
            }
            

        }
    });


    $("#submit").click(function(){

        if ( ($("#check_FromDate").val())>=($("#check_ToDate").val())) 
             {    
                  $('#msgdataAlert').html("From date' must be less then 'To date'");
                  $("#dataAlert").fadeTo(2000, 500).slideUp(500, function() {
                  $("#dataAlert").slideUp(1000);
                });
            } 
        else {
            console.log("else")
            var formData = new FormData($('#uploaded_form')[0]);
            $.ajax({
                    type: 'POST',
                    url: '/checking/',
                    data:formData,
                    processData: false, // tell jQuery not to process the data
                    contentType: false,

                     success: function(json) {
                        console.log("data=",json)
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


                     }
                 });//ajax

            }//else
 
 });//btn




});//doc
  


