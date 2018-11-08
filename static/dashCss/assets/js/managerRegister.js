jQuery(document).ready(function($) {
    $("#register_btn_id").click(function () {
    // alert();
    var name=$('#name').val(); 
    var center=$( "select#center" ).val(); 
    var manager=$( "select#manager" ).val();  
    var password=$('#password').val();
    var phone_no=$('#phone_no').val();
    var username=$('#username').val();
    var email= $('#email').val();
    var confirmPswrd=$('#confirmPswrd').val();
    console.log("passw",password,confirmPswrd)

    // //////////////////////////////////////////////
      
        if (name=='' || center == '' || manager == '' || password == '' || phone_no == '' ||username==''|| email==''||confirmPswrd=='') {
               console.log("helllloooooo")
                var emptymessage = "<b>Danger!Please enter all the field values</b>";
                $('#message').html(emptymessage);
                $("#warn_msg").fadeTo(2000, 500).slideUp(500, function() {
                    $("#warn_msg").slideUp(1000);
                }); 
                // console.log("helllloooooo")                   
        } 

        else {

            var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                if (!email_regex.test(email)) {
                  var emailAlert = "<b>this is not a valid email</b>";
                    $('#message').html(emailAlert);
                    $("#warn_msg").fadeTo(2000, 500).slideUp(500, function() {
                        $("#warn_msg").slideUp(1000);
                    });
                    
                }
            var pswrd= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            // var pswrd = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;

            if (!pswrd.test(password)) {
               var pswrdAlert = "<b>this is not a valid password.Enter atleast 1 lower and 1 uppercase letter and 1 digit and should contain at least 8 from the mentioned characters</b>";
                $('#message').html(pswrdAlert);
                $("#warn_msg").fadeTo(2000, 500).slideUp(500, function() {
                    $("#warn_msg").slideUp(1000);
                });

                }
            if(confirmPswrd!=password){ 
                var cnfrmPwd="<b>Password and confirm-Password does not match</b>"  
                $('#message').html(cnfrmPwd);
                $("#warn_msg").fadeTo(2000, 500).slideUp(500, function() {
                    $("#warn_msg").slideUp(1000);
                });
                }


                var name_id= /^[a-zA-Z\s]*$/;
            if (!name_id.test(name)) {        
                var userAlert = "this is not a valid Name. Only alphabets allowed";
                $('#message').html(userAlert);
                $("#warn_msg").fadeTo(2000, 500).slideUp(500, function() {
                    $("#warn_msg").slideUp(1000);
                });
                }

            var pattern =/^[a-zA-Z0-9._-]{3,16}$/i; 
            if (!pattern.test(username)) {        
                var userAlert = "this is not a valid user name. Only _ is valid in special characters ";
                $('#message').html(userAlert);
                $("#warn_msg").fadeTo(5000, 1000).slideUp(500, function() {
                    $("#warn_msg").slideUp(5000);
                });

                }

                var phone = /^(\+91[\-\s]?)?[89]\d{9}$/;
               
            if (!phone.test(phone_no)) {             
                    var phoneAlert = "this is not a valid phone number,eg:- +91 9916075507, +91-9916075509, +919916075509, 9916075509";                        
                    $('#message').html(phoneAlert);
                    $("#warn_msg").fadeTo(5000, 1000).slideUp(1000, function() {
                        $("#warn_msg").slideUp(4000);
                    });

                    }




            if((email_regex.test(email))==true && (pattern.test(username))==true && (pswrd.test(password))==true && (name_id.test(name))==true && ((phone.test(phone_no))==true))
                {
                 

                  console.log("111111111111=",center)        

    
                   $.ajax({
                    type:'POST',
                    url:'/signup/',    
                    data: {name: $('#name').val(),   
                    email: $('#email').val(),
                    password: $('#password').val(),
                    phone_no: $('#phone_no').val() , 
                    center:center,
                    manager:manager,
                    username: $('#username').val() , 
                  },

                  success: function(data) {    

                    console.log("data======","hello",data)
                    if (data == 'success') 
                                      {
                                          console.log('saved successfully');
                                         
                                          var successAlert = "Manager Created successfully";
                                          $('#messageNewSuccess').html(successAlert);
                                           $("#success_msg_new").fadeTo(4000, 500).slideUp(500, function() {                                                
                                              $("#success_msg_new").slideUp(3000);
                                          });
                                          window.location.href = "/AdminDashboard/";
                                          
                                          $('#username').val('');
                                          $("#email").val('');
                                          $('#password').val('');
                                          $('#phone_no').val('');
                                          $('#name').val('');

                                          
                                      } else {

                                          var registerErr = "user already exist";
                                          $('#messageNew').html(registerErr);
                                          $("#warn_msg_new").fadeTo(4000, 500).slideUp(500, function() {
                                              $("#warn_msg_new").slideUp(3000);
                                          });
                                        }



                                }//success close

                  });//ajax close

            }//if close

           
        }//else close




    });//button click close


});//document ready       
