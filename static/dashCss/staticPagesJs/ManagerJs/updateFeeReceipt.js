
jQuery(document).ready(function($) {    
    $('#receiptUpdateTable').DataTable({
        "paging": false,
        "ordering": false,
        "info":     false,
        "searching": false,
    });   

    $('#feeReceiptUpdate').bootstrapValidator({

         // container: '#messages',
            feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          //invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            fee_receipt: {
                validators: {
                    notEmpty: {
                        message: 'The receipt is required and cannot be empty'
                    },
                }
            },
            fee_feeType: {
                validators: {
                    notEmpty: {
                        message: 'Please select fee type'
                    },
                }
            },
            fee_gross_amount: {
                validators: {
                    notEmpty: {
                        message: 'The gross_amount is required and cannot be empty'
                    },
                }
            },
            fee_discount_amount: {
                validators: {
                    notEmpty: {
                        message: 'The discount_amount  is required and cannot be empty'
                    },
                }
            },
            fee_discount_note: {
                validators: {
                    notEmpty: {
                        message: 'The discount_note is required and cannot be empty'
                    },
                }
            },
            fee_net_amount: {
                validators: {
                    notEmpty: {
                        message: 'The net_amount is required and cannot be empty'
                    },
                }
            },
            fee_monthsTospan: {
                validators: {
                    notEmpty: {
                        message: 'The monthsTospan is required and cannot be empty'
                    },
                }
            },
            fee_modeOfPayment: {
                validators: {
                    notEmpty: {
                        message: 'Please select mode of Payment'
                    },
                }
            },
            fee_reference: {
                validators: {
                    notEmpty: {
                        message: 'The reference is required and cannot be empty'
                    },
                }
            },
            fee_Year: {
                validators: {
                    notEmpty: {
                        message: 'The Year is required and cannot be empty'
                    },
                }
            },
            fee_collectorId: {
                validators: {
                    notEmpty: {
                        message: 'The collectorId is required and cannot be empty'
                    },
                }
            },
            fee_checked: {
                validators: {
                    notEmpty: {
                        message: 'The checked is required and cannot be empty'
                    },
                }
            }
        }
    });

        $("#receiptUpdateBtn").click(function(){
                var formData = new FormData($('#feeReceiptUpdate')[0]); 
                var receiptId=$("#receiptId").val();
                $.ajax({
                        type: 'POST',
                        url: '/feeReceiptData/'+receiptId+'/',
                        data:formData,
                        processData: false, // tell jQuery not to process the data
                        contentType: false,

                         success: function(data) {
                            console.log('data',data)

                            if(data=='success')
                             {
                                window.location.href= '/receipt/';
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