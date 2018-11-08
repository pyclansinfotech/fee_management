$('#datepicker').datepicker({
        weekStart: 1,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
        orientation: "bottom"
    });
    $('#datepicker').datepicker("setDate", new Date());


// ToDate datepicker
    $('#ToDate').datepicker({
        weekStart: 1,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
        orientation: "bottom"
    });
    $('#ToDate').datepicker("setDate", new Date());


// DatePicker in Student Register From
    $('#joinedDate').datepicker({
        weekStart: 1,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
        orientation: "top"
    });
    $('#joinedDate').datepicker("setDate", new Date());


//update date
$('#datepicker1').datepicker({
        weekStart: 1,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
        orientation: "bottom"

    });
$('#datepicker1').datepicker("setDate", new Date());

//checking from date
$('#checkfrom').datepicker({
        weekStart: 1,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
        orientation: "bottom"

    });
$('#checkfrom').datepicker("setDate", new Date());

//checking To date
$('#checkto').datepicker({
        weekStart: 1,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
        orientation: "bottom"

    });
$('#checkto').datepicker("setDate", new Date());


//time for batch
$(function () {
    $('#datetimepicker3').datetimepicker({
        format: 'LT'
    });

    $("#datepickerValid").datepicker({
    });

    $("#datepickerBatch").datepicker({
    });

    $("#datepickerReceipt").datepicker({
    });
    
});



// {% if data[checked]==1 %}
// <input type="checkbox" name="fee_checked" checked value="1"> &nbsp;True &nbsp; &nbsp; 
// {% else %}
// <input type="checkbox" name="fee_checked"  value="1"> &nbsp;True &nbsp; &nbsp; 
// {% endif %}

// <!-- {% if data.checked==0 %}
// <input type="checkbox" checked name="fee_checked" value="0"> &nbsp;False
// {% else %}
// <input type="checkbox"  name="fee_checked" value="0"> &nbsp;False
// {% endif %}
//  -->





// view upload


//         # for count,data in enumerate(worksheet):   
//         #   print("count=",count)
//         #   print("data=",data) 
//         #   # if count>0 and count<8:   
//             #   uploaded.objects.create(TranDate=data[0],RefTran1=data[1],RefTran2=data[2],
//             #   RefTran3=data[3],RefTran4=data[4],Amount=data[5],checked=data[6])
//             # print('saved')
//         #return HttpResponse("success") 

//         # table=workbook.sheet_names()
//         # # table = data.sheet_by_name(u'Sheet1')#By getting the name
//         # # 4, Gets the entire rows and columns of values (returns)
//         # a=table.row_values(i)
//         # b=table.col_values(i)
//         # print("a=",a)
//         # print("b=",b)
//         # # 5, Gets the number of rows and columns　
//         # c=table.nrows
//         # d=table.ncols
//         # print("c=",c)
//         # print("d=",d)


//         # import json
//         # from django.core.serializers.json import DjangoJSONEncoder
//         # dataNewIs =  json.dumps(etf_xls_file, cls=DjangoJSONEncoder)  
//         # for count,data in enumerate(sheet):       
//         #   if count>0 and count<8: 
//         #       uploaded.objects.create(TranDate=data[0],RefTran1=data[1],RefTran2=data[2],
//         #       RefTran3=data[3],RefTran4=data[4],Amount=data[5],checked=data[6])
//         #   print('saved')




        




        

//         # username = User.objects.filter(username=request.user).update(username=userName,email=email,password=userpswrd)
//         # userImg=userInfo.objects.filter(userforeignid=request.user).update(image=filename,email=email)
//         # return HttpResponse("success")


//         # ////////////////////////////////

//         # fs = FileSystemStorage()
//         # filename = fs.save(myfile.name, myfile)
//         # uploaded_file_url = fs.url(filename)
//         # print(">>>>>>>>>>>>>>>>>=",request.POST,myfile,filename,uploaded_file_url)

        
//         # idTRanCheckSum="" is id field
        
        
//     # ////////////////////////////////////////////////////////////////  # 
    
// # //////////////////////////////////// MAIN /////////////////////////
//         # from pyexcel_ods import get_data
//         # data = get_data("/var/www/Projects/FeeManagement/fee_management/excelUpload.ods")
//         # import json
//         # from django.core.serializers.json import DjangoJSONEncoder
//         # dataNewIs =  json.dumps(data, cls=DjangoJSONEncoder)  
//         # import pyexcel as pe
//         # from pyexcel.ext import ods
//         # sheet = pe.get_sheet(file_name="/var/www/Projects/FeeManagement/fee_management/excelUpload.ods")
//         # # print("sheet===============",sheet)
//         # for count,data in enumerate(sheet):       
//         #   if count>0 and count<8: 
//         #       uploaded.objects.create(TranDate=data[0],RefTran1=data[1],RefTran2=data[2],
//         #       RefTran3=data[3],RefTran4=data[4],Amount=data[5],checked=data[6])
//             # print('saved')

// # //////////////////////// Main End //////////////////