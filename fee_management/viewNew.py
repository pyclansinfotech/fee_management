
# At this point, user is a User object that has already been saved
# to the database. You can continue to change its attributes
# if you want to change other fields.
# >>> user.last_name = 'Lennon'
# >>> user.save()


# @csrf_exempt
# def home(request):
#     """View function for home page of site."""
#     return render(request, 'home.html')


# @csrf_exempt
# def FeeMgtHome(request):

# 	if request.method=="POST":
# 		email= request.POST.get('email')
		
# 		data=User.objects.filter(email=email)
# 		for i in data:
# 			print("userrrrrrrrrrrrrr============",i.username)
		
# 		pswrd= request.POST.get('password')		
		
# 		print("userpswrd==",pswrd)
# 		user=authenticate(username=i.username,password=pswrd)
# 		print("user=====================================",user)

# 		if user is not None:
# 			login(request, user)
# 			flag=User.objects.filter(username=i.username)			
# 			for value in flag:
# 				superUser=value.is_superuser
# 			try:	
# 				if superUser==1:

# 					return HttpResponse("Admin")
# 				else:

# 					return HttpResponse("success") 
# 			except Exception as e:
# 				print("errorrrrrrrrrrrrrrrrr=",e)
						
			
# 		else:
# 			return HttpResponse("cred_error")
# 	return render(request, 'FeeMgtHome.html')

# @csrf_exempt
# def AboutUs(request):
#     """View function for home page of site."""
#     return render(request, 'about_us.html')

# @csrf_exempt
# def ContactUs(request):
#     """View function for home page of site."""
#     return render(request, 'contact_us.html')
 


# @csrf_exempt
# def signin(request):
		
	
# 	return render(request, 'login.html')





# @login_required(login_url="/FeeMgtHome/")
# @csrf_exempt
# def PaymentHistory(request):
# 	studentdata=paymentModel.objects.filter(managerType="Manager2")
# 	flag=request.GET.get("flag")
# 	if flag=="true":		
# 		idStudent=request.GET.get("idStudent")
# 		print("code=====",idStudent)
# 		deleteStudent=paymentModel.objects.get(id=idStudent).delete()
# 		# deleteStudent.save()
# 		print("hellloooooooooooooooooooooooooooooooooooo")
# 		return HttpResponse("success")


# 	return render(request, 'dashboard/PaymentHistory.html',{'studentdata':studentdata})

# @login_required(login_url="/FeeMgtHome/")
# @csrf_exempt
# def paymentForm(request):
# 	if request.method=="POST":
# 		firstname=request.POST.get("firstname")
# 		fathername=request.POST.get("fathername")
# 		phone_no=request.POST.get("phone_no")
# 		email=request.POST.get("email")
# 		birthdate=request.POST.get("birthdate")
# 		feeSubDate=request.POST.get("feeSubDate")
# 		gender=request.POST.get("gender")
# 		ExamFee=request.POST.get("ExamFee")
# 		ExMatFee=request.POST.get("ExMatFee")
# 		jan=request.POST.get("jan")
# 		may=request.POST.get("may")
# 		sep=request.POST.get("sep")
# 		Manager_id=request.user.id
# 		ManagerName=managerRegister.objects.filter(user=Manager_id)
# 		for data in ManagerName:
# 			MngrName=data.manager
# 		paymentModel.objects.create(firstname=firstname,ExMatFee=ExMatFee,termFeeJan=jan,termFeeMay=may,termFeeSep=sep,fathername= fathername,phone_no=phone_no,
# 			ExamFee=ExamFee,email=email,birthdate=birthdate,feeSubDate=feeSubDate,gender=gender,managerType=MngrName)
# 		return HttpResponse('success')	

# 	return render(request, 'dashboard/paymentForm.html')


# @login_required(login_url="/FeeMgtHome/")	
# @csrf_exempt
# def editStd(request,idnew):
# 	print("idddddddddddddddddddddddddddddddddddddddddddddddd=",idnew)
# 	if request.method=="POST":
# 		firstname=request.POST.get("firstname")
# 		phone_no=request.POST.get("phone_no")
# 		email=request.POST.get("email")
# 		extraChg=request.POST.get("extraChg")
# 		examFee=request.POST.get("examFee")
# 		print("uffffffffffffffffffffffffffffffff")
# 		stdTableId=paymentModel.objects.filter(id=idnew).update(firstname=firstname,phone_no=phone_no,email=email,ExMatFee=extraChg,ExamFee=examFee)
# 		# for data in stdTbl:
# 		# 	data.firstname=firstname

# 		# paymentModel.objects.update(firstname=firstname,ExMatFee=ExMatFee,termFeeJan=jan,termFeeMay=may,termFeeSep=sep,phone_no=phone_no,
# 			# ExamFee=ExamFee,email=email,birthdate=birthdate,managerType=MngrName)
# 		return HttpResponse('success')
# 	else:
# 		stdTableId=paymentModel.objects.filter(id=idnew)
# 		for student in stdTableId:
# 			name=student.firstname
# 			phone=student.phone_no
# 			ExMatFee=student.ExMatFee
# 			email=student.email 
# 			termFeeJan=student.termFeeJan
# 			termFeeMay=student.termFeeMay
# 			termFeeSep=student.termFeeSep
# 			ExamFee=student.ExamFee
# 		return render(request, 'dashboard/EditStudent.html',{"name":name,"phone":phone,"email":email,"idnew":idnew,"ExMatFee":ExMatFee,"ExamFee":ExamFee,"termFeeJan":termFeeJan,"termFeeMay":termFeeMay,"termFeeSep":termFeeSep})



# @login_required(login_url="/FeeMgtHome/")
# def Stufee_receipt(request):
# 	return render(request, 'dashboard1/fee_receipt.html')

# @login_required(login_url="/FeeMgtHome/")
# def Stufee_register(request):

# 	return render(request, 'dashboard1/fee_register.html')




# //////////////////////////// Monika ////////////////////////////////////////////
# def base(request):

# 	return render(request, 'dashboard1/base.html')

# def payments(request):
# 	return render(request, 'dashboard1/payments.html')

# def payments_history(request):
# 	return render(request, 'dashboard1/payments_history.html')


# def fee_receipt(request):
# 	return render(request, 'dashboard1/fee_receipt.html')

# def fee_register(request):

# 	return render(request, 'dashboard1/fee_register.html')

# Monika end views///////////////////////////////





# ///////////////////////urls//////////////////////////////////////////////////////

# path('signin/',views.signin),
    
    # path('paymentForm/',views.paymentForm),
    # path('PaymentHistory/',views.PaymentHistory),
    # url(r'^captcha/', include('captcha.urls')),



    # path('editStudent/<int:idnew>/',views.editStd),
    # path('Student_Registrtion/', views.Student_Registrtion),
    # path('Stufee_receipt/', views.fee_receipt),
    # path('Stufee_register/', views.fee_register),
   
    # path('FeeMgtHome/', views.FeeMgtHome),
    # path('AboutUs/',views.AboutUs),
    # path('ContactUs/',views.ContactUs),
    


    # //////////// Monika ///////////////////
    # path('base/', views.base),
    # path('payments/', views.payments),
    # path('payments_history/', views.payments_history),
   
    
    # path('fee_receipt/', views.fee_receipt),
    # path('fee_register/', views.fee_register),
