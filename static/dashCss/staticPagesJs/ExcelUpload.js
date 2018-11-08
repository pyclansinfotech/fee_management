

 var baseString = '';
            function readURL(input) {
                  if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                     baseString=e.target.result;
                    sessionStorage.setItem('baseString', baseString);
                    localStorage.setItem('baseString', baseString);

                      
                      // console.log("baseString=",baseString)
                      
                      var baseid=$('#base').val(e.target.result);
                      
                    };
                    
                    reader.readAsDataURL(input.files[0]);
                    
                  }
                }


jQuery(document).ready(function($) {
    
 
   // var birthdate = birthday.replace(/(..).(..).(....)/, "$3-$1-$2");


    $("#excelSubBtn").click(function(){
        var fileinput=$('#fileinput').val();        
        var base=$('#base').val();        
        if ((fileinput=='') && (base=='')) {          
          $('#msguploadAlert').html('please select file to upload');
          $("#uploadAlert").fadeTo(2000, 500).slideUp(500, function() {
                $("#uploadAlert").slideUp(1000);
              });
            } 

        else { 
          // alert("elsseeeeeeeeeeeeeeeeeee")

            var baseid=$('#base').val();
            var splitFile=baseid.split("base64,")            
            var file=$('#fileinput').val();
            // console.log("nameeeeeeeeeeeeeeeeee=",baseid,file)

            var filename=file.split('/').pop().split('\\').pop();

            // console.log("imageeeeeeeeeeeeeeeeee=",filename)  
            // return false;



            $.ajax({
                    type: 'POST',
                    url: '/ExcelUpload/',
                    // data:formData,
                    data: {      
                      'dataFile':splitFile[1],
                      'filename':filename,

                        },                   

                     success: function(json) {
                        console.log("jsonnnnnnnnnnn=",json)                        
                        // return false;
                         if(json=='success'){                            
                              $('#msgHtmlAlert').html('File data saved successfully');
                              $("#msgAlert").fadeTo(2000, 500).slideUp(500, function() {
                              $("#msgAlert").slideUp(1000);                             
                                });
                              setTimeout(function(){  window.location.href= "/ExcelUpload/";  }, 2000);

                               

                         }
                          else
                                {    
                                  $('#msgHtmlAlert').html('Wrong Credentials');
                                  $("#msgAlert").fadeTo(2000, 500).slideUp(500, function() {
                                  $("#msgAlert").slideUp(1000);
                                });

                            } 
                     }//success
                 });//ajax

            }//else   

    });//btn

});//ready
  
