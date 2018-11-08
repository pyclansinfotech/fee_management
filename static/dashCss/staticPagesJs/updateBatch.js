jQuery(document).ready(function($) {

    $('#batchTable').DataTable({
        "paging": false,
        "ordering": false,
        "info":     false,
        "searching": false,

    });   


    $('#update_batch').bootstrapValidator({

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


        $("#updateBatchBtn").click(function(){
                var formData = new FormData($('#update_batch')[0]); 
                var idbatch=$("#batchid").val();
                $.ajax({
                        type: 'POST',
                        url: '/batchUpdated/'+idbatch+'/',
                        data:formData,
                        processData: false, // tell jQuery not to process the data
                        contentType: false,

                         success: function(data) {
                            console.log('data',data)

                            if(data=='success')
                             {
                                window.location.href= '/batch/';
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