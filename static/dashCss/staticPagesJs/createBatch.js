
$(function () {
    $('#datetimepicker3').datetimepicker({
        format: 'LT'
    });
});


jQuery(document).ready(function($) {
    $('#batch_form').bootstrapValidator({
    // container: '#messages',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            batch_day: {
                validators: {
                    notEmpty: {
                        message: ' * batch day cannot be empty'
                    }
                }
            },
            batch_time: {
                validators: {
                    notEmpty: {
                        message: ' * batch time field cannot be empty'
                    },
                    
                }
            },
            bat_room: {
                validators: {
                    notEmpty: {
                        message: ' * Please fill the room field'
                    },
                    
                }
            },
             bat_student: {
                validators: {
                    notEmpty: {
                        message: ' * student field cannot be empty'
                    },
                    
                }
            },
            batch_center: {
                validators: {
                    notEmpty: {
                        message: ' * please select Center type'
                    },
                    
                }
            },
            batch_center_name: {
                validators: {
                    notEmpty: {
                        message: ' * please select center'
                    },
                    
                }
            },

            bat_level: {
                validators: {
                   

                    notEmpty: {
                        message: '* batch level cannot be empty'
                    },
                    
                }
            }
        }
    });


    $("#batchBtn").click(function(){


        if ($('#batch_form').bootstrapValidator('validate').has('.has-error').length) {
          
            } 
        else {
             
                var formData = new FormData($('#batch_form')[0]);
                $.ajax({
                        type: 'POST',
                        url: '/createBatch/',
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
                                  $('#msgBatchAlert').html('Wrong Credentials');
                                  $("#dataAlertBatch").fadeTo(2000, 500).slideUp(500, function() {
                                  $("#dataAlertBatch").slideUp(1000);
                                });

                            } //inner else


                     }
                 });//ajax

            }//else
 
 });//btn




});//doc
  


