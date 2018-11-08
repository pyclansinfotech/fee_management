from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.http import (HttpResponse, HttpResponseNotFound, Http404, 
HttpResponseRedirect, HttpResponsePermanentRedirect)
from .models import managerRegister,paymentModel,student,center,uploaded,checker,batch,feeReceipt
from django.contrib.auth.hashers import make_password
from django.contrib.auth.decorators import login_required
import sys,json
import datetime
import base64
from django.conf import settings
import dateutil
from dateutil import parser
# 'django.contrib.sessions.middleware.SessionMiddleware'

# ///////////// fee mgt start//////////////////
#  home page#
@csrf_exempt
def fee_login(request):
	if request.method=="POST":
		email= request.POST.get('email')
		pswrd= request.POST.get('password')
		data=User.objects.filter(email=email)		
		if (len(data)!=0):
			for i in data:
				userName=i.username
			pswrd= request.POST.get('password')	
			print("userpswrd==",email,pswrd)
			user=authenticate(username=userName,password=pswrd)
			print("user=====================================",user)
			
			if user is not None:
				login(request, user)
				flag=User.objects.filter(username=userName)			
				for value in flag:
					superUser=value.is_superuser
				try:	
					if superUser==1:

						return HttpResponse("Admin")
					else:

						return HttpResponse("success") 
				except Exception as e:
					print("errorrrrrrrrrrrrrrrrr=",e)
			
			else:
				return HttpResponse("password_error")
				
		else:
			return HttpResponse("cred_error")
	return render(request, 'fee_login.html')
# home page end/

@csrf_exempt
def signout(request):
	logout(request)
	return render(request,'fee_login.html')	




# ///////////////// end///////////////////////////



# /////////////// AdminDashboard Views /////////////////



@login_required(login_url="/")
@csrf_exempt
def AdminDashboard(request):
	return render(request, 'AdminDash/AdminDashboard.html')
	

@login_required(login_url="/")
@csrf_exempt
def BaseDashboard(request):
	return render(request, 'BaseDashboard.html')	

@login_required(login_url="/")
@csrf_exempt
def ManagerRegister(request):
	if request.method=="POST":		
		email=request.POST['manager_email']		
		if((len(User.objects.filter(email=email))!=0) or (len(User.objects.filter(username=request.POST['manager_username']))!=0)):
			return HttpResponse('user already registered')
		else:
			password=make_password(request.POST['manager_password'])
			print("mkpswrd=",password)
			user = User.objects.create(username=request.POST['manager_username'], email=email, password=password)			
			user.save()
			data=User.objects.filter(email=email)
			for value in data:
				idForeign=value.id
				print("iddddddddddddddddd=",idForeign)

				# user foreign key
				register_data=managerRegister.objects.create(name=request.POST['manager_name'], batch=request.POST['manager_batch'],
				center=request.POST['manager_center'],phone=request.POST['manager_phone_no'],user=user)
					# register_data.save()
			return HttpResponse('success')	

	batchInfo=batch.objects.all()
	centerInfo=center.objects.all()	

	return render(request, 'AdminDash/ManagerRegister.html',{'centerInfo':centerInfo,'batchInfo':batchInfo})

@login_required(login_url="/")
@csrf_exempt
def updateManager(request):
	managerData=managerRegister.objects.all()	
	centerName=center.objects.all()
	batchName=batch.objects.all()
	return render(request, 'AdminDash/updateManager.html',{'batchName':batchName,
			'centerName':centerName,'managerData':managerData})	
		

@login_required(login_url="/")
@csrf_exempt
def getManagerData(request,id):
	if request.method=="POST":	 	
		print("request============",request.POST)
		register_data=managerRegister.objects.filter(id=id).update(name=request.POST['manager_name_upd'],batch=request.POST['manager_batch_upd'],
			center=request.POST['manager_center_upd'],phone=request.POST['manager_phone_upd'])		
		managerId=managerRegister.objects.filter(id=id)	
		for data in managerId:
			idUser=data.user.id	
			print('useriddddddddddddddd=',idUser)	
			# sys.exit()			
		user = User.objects.filter(id=idUser).update(email=request.POST['manager_email_upd'])			
		return HttpResponse('success')
	else:		
		managerData=managerRegister.objects.all()
		managerIdData=managerRegister.objects.filter(id=id)	
		for data in managerIdData:
			userId=data.user.id
		centerName=center.objects.all()
		batchName=batch.objects.all()
		updateMang=User.objects.filter(id=userId)
		for detail in updateMang:
			UserName=detail.username
			email=detail.email	
		return render(request, 'AdminDash/updateManager.html',{'UserName':UserName,'email':email,'updateMang':updateMang,'batchName':batchName,
			'centerName':centerName,'managerData':managerData,'managerIdData':managerIdData})

		
@login_required(login_url="/")
@csrf_exempt
def CreateCenter(request):
	if request.method=="POST":		
		validTill=request.POST['cen_validTill']
		TranDate = datetime.datetime.strptime(validTill,'%m-%d-%Y').strftime('%Y-%m-%d')
		print("validTill=",validTill,TranDate,request.method)
		try:
			data=center.objects.create(name=request.POST['cen_name'],address1=request.POST['cen_address1'],address2=request.POST['cen_address2'],
			postcode=request.POST['cen_postcode'],phone1=request.POST['cen_phone1'],phone2=request.POST['cen_phone2'],email=request.POST['cen_email'],
			manager=request.POST['cen_manager'],Type=request.POST['cen_Type'],status=request.POST['cen_status'],validTill=TranDate)
			return HttpResponse('success')
		except Exception as e:
			print("e=",e)

	managerData=managerRegister.objects.all()	
	# request.session['Data'] = managerData


	return render(request, 'AdminDash/center.html',{'managerData':managerData})

	
@login_required(login_url="/")
@csrf_exempt
def updateCenter(request):
	centerName=center.objects.all()
	managerData=managerRegister.objects.all()
		
	return render(request, 'AdminDash/updateCenter.html',{'centerName':centerName,'managerData':managerData})


@login_required(login_url="/")
@csrf_exempt
def getCenterData(request,id):
	print("idddddddddddddddddddddddd=",id)
	if request.method=="POST":
		validTill=request.POST['cen_validTill']
		TranDate = datetime.datetime.strptime(validTill,'%m-%d-%Y').strftime('%Y-%m-%d')
		try:
			dataSave=center.objects.filter(id=id).update(name=request.POST['cen_name'],address1=request.POST['cen_address1'],address2=request.POST['cen_address2'],
			postcode=request.POST['cen_postcode'],phone1=request.POST['cen_phone1'],phone2=request.POST['cen_phone2'],email=request.POST['cen_email'],
			manager=request.POST['cen_manager'],Type=request.POST['cen_Type'],status=request.POST['cen_status'],validTill=TranDate)
			return HttpResponse('success')
		except Exception as e:
			print("e=",e)

	centerData=center.objects.filter(id=id)
	for date in centerData:
		oldDate=date.validTill
		NewDate = oldDate.strftime('%m-%d-%Y')	
		print("old and new==========",oldDate,NewDate)	
	centerName=center.objects.all()
	managerData=managerRegister.objects.all()
	return render(request, 'AdminDash/updateCenter.html',{'centerData':centerData,'managerData':managerData,'centerName':centerName,'NewDate':NewDate})

@login_required(login_url="/")
@csrf_exempt
def createBatch(request):
	if request.method=="POST":
		print("2222222222222=",request.POST['batch_time'],request.POST)
		
		# idCenter field remianing
		try:
			data=batch.objects.create(day=request.POST['batch_day'],time=request.POST['batch_time'],room=request.POST['bat_room'],
			students=request.POST['bat_student'],centerName=request.POST['batch_center_name'],levels=request.POST['bat_level'],
			center=request.POST['batch_center'])
			return HttpResponse('success')
		except Exception as e:
			print("e=",e)

	centerName=	center.objects.all()

	return render(request, 'AdminDash/createBatch.html',{'centerName':centerName})
	# return render(request, 'AdminDash/updateBatch.html',{'centerName':centerName})	

	

@login_required(login_url="/")
@csrf_exempt
def updateBatch(request):
	batchData=batch.objects.all()
	print("11111111111111111111111=",batchData)
	if request.method=="POST":
		print('data>>>>>>',request.POST)
		print('data1111111111111>>>>>>',request.body)		
	
	else:
		print("hellooooooooooooooooooooooo")	
	centerName=	center.objects.all()	
	return render(request, 'AdminDash/updateBatch.html',{'batchData':batchData,'centerName':centerName})	



@login_required(login_url="/")
@csrf_exempt
def getBatchData(request,id):
	print("idddddddddddddddddddddddd=",id)
	if request.method=="POST":
		# validTill=request.POST['cen_validTill']
		# TranDate = datetime.datetime.strptime(validTill,'%m-%d-%Y').strftime('%Y-%m-%d')
		try:
			dataSave=batch.objects.filter(id=id).update(day=request.POST['batch_day'],time=request.POST['batch_time'],room=request.POST['bat_room'],
			students=request.POST['bat_student'],levels=request.POST['bat_level'],centerName=request.POST['batch_center_name'],center=request.POST['batch_center'])
			return HttpResponse('success')
			
		except Exception as e:
			print("e=====================",e)

	batchName=batch.objects.filter(id=id)
	# for date in batchData:
	# 	oldDate=date.validTill
	# 	NewDate = oldDate.strftime('%m-%d-%Y')	
	# 	print("old and new==========",oldDate,NewDate)	
	batchData=batch.objects.all()
	centerName=	center.objects.all()

	# return render(request, 'AdminDash/updateBatch.html',{'centerData':centerData,'centerName':centerName,'NewDate':NewDate})
	return render(request, 'AdminDash/updateBatch.html',{'batchData':batchData,'batchName':batchName,'centerName':centerName})

@login_required(login_url="/")
@csrf_exempt
def upload(request):
	if request.method=="POST":
		print(">>>>>>>>>>>>>>>>>=",request.POST)
		date = request.POST['upl_TranDate']
		TranDate = datetime.datetime.strptime(date,'%m-%d-%Y').strftime('%Y-%m-%d')
		# idTRanCheckSum="" is id field
		
		try:
			data=uploaded.objects.create(TranDate=TranDate,RefTran1=request.POST['upl_RefTran1'],RefTran2=request.POST['upl_RefTran2'],
			RefTran3=request.POST['upl_RefTran3'],RefTran4=request.POST['upl_RefTran4'],Amount=request.POST['upl_Amount'],checked=request.POST['cen_status'])
			return HttpResponse('success')	
		except Exception as e:
			print("e=",e)
	return render(request, 'AdminDash/uploaded.html')

@login_required(login_url="/")
@csrf_exempt
def ExcelUpload(request):
	if request.method=="POST":
		dataFile=request.POST.get("dataFile")
		filedata=base64.b64decode(dataFile)
		filename = request.POST.get("filename")
		getExtension=filename.split('.')
		print("file name !!!!=",getExtension)
		fileExtension=getExtension[1]
		print("file name !!!!=",fileExtension)
		# sys.exit()


		
		with open(r'/var/www/Projects/FeeManagement/fee_management/media//'+filename, 'wb') as f:
			f.write(filedata)
		
		mediaPath=settings.MEDIA_ROOT 		
		name_file=mediaPath+"/"+filename

		if fileExtension=='ods':
			print("inside ode fileeeeeeeeeeeeeeeeeeee")

			# ///////////////////// ods_file start //////////


			import pyexcel as pe
			from pyexcel.ext import ods
			sheet = pe.get_sheet(file_name=name_file)
			print("sheet===============")
			# sys.exit()	
			for count,data in enumerate(sheet): 
				ncount=count+1  
				print("cou=",ncount)	    
				if count>0 : 
					print('counttttttttttttt==',count,data,data[0],type(data[0]))
					dateOld=data[0]
					import dateutil
					from dateutil import parser
					
					dateNew=parser.parse(dateOld)
					print("date elseeeeeeeeee=",dateNew)
					# sys.exit()
					uploaded.objects.create(TranDate=dateNew,RefTran1=data[1],RefTran2=data[2],
					RefTran3=data[3],RefTran4=data[4],Amount=data[5],checked=data[6])
				print('saved')

			# ///////////////////// ods_file end //////////

		elif fileExtension=='xlsx':	
			print("inside xlsx fileeeeeeeeeeeeeeeeeeee")

			# ///////////////////// xlsx_file start //////////
			
			import xlrd
			etf_xls_file = xlrd.open_workbook(name_file)
			workbook = xlrd.open_workbook(name_file, on_demand = True)
			sheetName=workbook.sheet_names()
			worksheet = workbook.sheet_by_index(0)
			
			for j in range(1,worksheet.nrows):
				wrongValue = worksheet.cell_value(j,0)
				x=worksheet.cell_value(j,0)	
				print("xxxxxxxxx=",type(x),x)
				if type(x)==float:				
					print("inside ifffffffff")
					y, m, d, h, i, s = xlrd.xldate_as_tuple(x, workbook.datemode)
					date="{0}-{1}-{2}".format(y, m, d)	
					print("date ifffffffff=",date)		
					uploaded.objects.create(TranDate=date,RefTran1=worksheet.cell_value(j,1),RefTran2=worksheet.cell_value(j,2),
				 	RefTran3=worksheet.cell_value(j,3),RefTran4=worksheet.cell_value(j,4),Amount=worksheet.cell_value(j,5),checked=worksheet.cell_value(j,6))
				
				else:	
					print("inside elseeeeeeee")
					import dateutil
					from dateutil import parser
					print("111111111=",parser.parse(x))
					date=parser.parse(x)
					print("date elseeeeeeeeee=",date)
					uploaded.objects.create(TranDate=date,RefTran1=worksheet.cell_value(j,1),RefTran2=worksheet.cell_value(j,2),
				 	RefTran3=worksheet.cell_value(j,3),RefTran4=worksheet.cell_value(j,4),Amount=worksheet.cell_value(j,5),checked=worksheet.cell_value(j,6))
		
		 # ///////////////////// xlsx_file end /////////////
		elif fileExtension=='xls':	
			print("inside xls fileeeeeeeeeeeeeeeeeeee")
			import xlrd
			etf_xls_file = xlrd.open_workbook(name_file)
			workbook = xlrd.open_workbook(name_file, on_demand = True)
			sheetName=workbook.sheet_names()
			worksheet = workbook.sheet_by_index(0)
			print("xls worksheet===========",worksheet,worksheet.nrows)
			for j in range(1,worksheet.nrows):
				wrongValue = worksheet.cell_value(j,0)
				x=worksheet.cell_value(j,0)	
				print("xxxxxxxxx=",type(x),x)
				if type(x)==float:				
					print("inside ifffffffff")
					y, m, d, h, i, s = xlrd.xldate_as_tuple(x, workbook.datemode)
					date="{0}-{1}-{2}".format(y, m, d)	
					print("date ifffffffff=",date)		
					uploaded.objects.create(TranDate=date,RefTran1=worksheet.cell_value(j,1),RefTran2=worksheet.cell_value(j,2),
				 	RefTran3=worksheet.cell_value(j,3),RefTran4=worksheet.cell_value(j,4),Amount=worksheet.cell_value(j,5),checked=worksheet.cell_value(j,6))
				
				else:	
					print("inside elseeeeeeee")
					import dateutil
					from dateutil import parser
					print("111111111=",parser.parse(x))
					date=parser.parse(x)
					print("date elseeeeeeeeee=",date)
					uploaded.objects.create(TranDate=date,RefTran1=worksheet.cell_value(j,1),RefTran2=worksheet.cell_value(j,2),
				 	RefTran3=worksheet.cell_value(j,3),RefTran4=worksheet.cell_value(j,4),Amount=worksheet.cell_value(j,5),checked=worksheet.cell_value(j,6))
		



			# ///////////////////// xls_file start //////////
			 
			# ///////////////////// xls_file end /////////////
		else:
			print("something wrongggggggggggggggggggggggggggggg")	

		return HttpResponse("success")
	else:	
		return render(request, 'AdminDash/ExcelUpload.html')	



@login_required(login_url="/")
@csrf_exempt
def checking(request):
	if request.method=="POST":
		date1=request.POST['check_FromDate']
		fromTime= datetime.datetime.strptime(date1,'%m-%d-%Y').strftime('%Y-%m-%d')
		date2=request.POST['check_ToDate']
		toTime= datetime.datetime.strptime(date2,'%m-%d-%Y').strftime('%Y-%m-%d')
		checker.objects.create(FromDate=fromTime,ToDate=toTime,Type=request.POST['check_Type'],
		Description=request.POST['check_Description'],FeeReceived=request.POST['check_FeeReceived'],
		FeeChecked=request.POST['check_FeeChecked'],TranPending=request.POST['check_TranPending'])
		return HttpResponse('success')
	return render(request, 'AdminDash/checking.html')



# //////////////  End AdminDashboard Views //////////////



# /////////////// ManagerDashboard Views /////////////////
@login_required(login_url="/")
@csrf_exempt
def ManagerDashboard(request):

	return render(request, 'ManagerDash/ManagerDashboard.html')
	
@login_required(login_url="/")
@csrf_exempt
def studentRegister(request):
	if request.method=="POST":
		# validTill=request.POST['cen_validTill']
		# TranDate = datetime.datetime.strptime(validTill,'%m-%d-%Y').strftime('%Y-%m-%d')
		try:
			print("request.POST===",request.POST)
			# sys.exit()
			stu_joined_date=request.POST['stu_joined_date']
			print("11111=",stu_joined_date)
			stuDate = datetime.datetime.strptime(stu_joined_date,'%d-%m-%Y').strftime('%Y-%m-%d')
			print("aaaaaaaa=",stu_joined_date ,stuDate)
			studentData=student.objects.create(first_name=request.POST['stu_first_name'],second_name=request.POST['stu_second_name'],
			idLevel=request.POST['stu_idLevel'],idci=request.POST['stu_idci'],idlevel_certified=request.POST['stu_idlevel_certified'],status=request.POST['stu_status'],
			level_classes_done=request.POST['stu_level_classes_done'],school_type=request.POST['stu_school_type'],special_need=request.POST['stu_special_need'],
			special_need_note=request.POST['stu_special_need_note'],idClass=request.POST['stu_class'],phone1=request.POST['stu_phone1'],
			phone2=request.POST['stu_phone2'],parent_name=request.POST['stu_parent_name'],address1=request.POST['stu_address1'],
			address2=request.POST['stu_address2'],postcode=request.POST['stu_postcode'],email=request.POST['stu_email'],
			school_name=request.POST['stu_school_name'],school_year=request.POST['stu_school_year'],joined_date=stuDate,
			gender=request.POST['stu_gender'])
			return HttpResponse('success')			
		except Exception as e:
			print("e=====================",e)
	return render(request, 'ManagerDash/studentRegister.html')

@login_required(login_url="/")
@csrf_exempt
def updateStudent(request):
	studentName=student.objects.all()
	return render(request, 'ManagerDash/updateStudent.html',{'studentName':studentName})



@login_required(login_url="/")
@csrf_exempt
def studentUpdateData(request,id):	
	if request.method=="POST":
		print(">>>>>>>>>>>>>>>>",request.POST)		
		try:
			studentDataUpdate=student.objects.filter(id=id).update(first_name=request.POST['stu_first_name'],second_name=request.POST['stu_second_name'],
			idLevel=request.POST['stu_idLevel'],status=request.POST['stu_status'],idlevel_certified=request.POST['stu_idlevel_certified'],
			level_classes_done=request.POST['stu_level_classes_done'],phone1=request.POST['stu_phone1'],phone2=request.POST['stu_phone2'],
			address1=request.POST['stu_address1'],address2=request.POST['stu_address2'],postcode=request.POST['stu_postcode'],email=request.POST['stu_email'],
			)
			return HttpResponse('success')		
		except Exception as e:
			print("e=",e)

	studentData=student.objects.filter(id=id)	
	studentName=student.objects.all()
	return render(request,'ManagerDash/updateStudent.html',{'studentData':studentData,'studentName':studentName})



@login_required(login_url="/")
@csrf_exempt
def feeReceiptFun(request):	
	if request.method=="POST":
		fee_date=request.POST['fee_date']
		Date = datetime.datetime.strptime(fee_date,'%m-%d-%Y').strftime('%Y-%m-%d')
		try:

			print("request.POST===",request.POST)
			# foreign keys:- idTranCheckSum,idCenter,idstudent
			FeeReceiptData=feeReceipt.objects.create(receipt=request.POST['fee_receipt'],date=Date,
			feeType=request.POST['fee_feeType'],gross_amount=request.POST['fee_gross_amount'],discount_amount=request.POST['fee_discount_amount'],
			discount_note=request.POST['fee_discount_note'],net_amount=request.POST['fee_net_amount'],monthsTospan=request.POST['fee_monthsTospan'],
			modeOfPayment=request.POST['fee_modeOfPayment'],reference=request.POST['fee_reference'],
			year=request.POST['fee_Year'],collectorId=request.POST['fee_collectorId'],checked=request.POST['fee_checked'])
			return HttpResponse('success')
		except Exception as e:
			print("e=====================",e)
	return render(request, 'ManagerDash/feeReceipt.html')	

@login_required(login_url="/")
@csrf_exempt
def updateFeeReceipt(request):
	receiptId=feeReceipt.objects.all()
	return render(request, 'ManagerDash/updateFeeReceipt.html',{'receiptId':receiptId})



@login_required(login_url="/")
@csrf_exempt
def feeReceiptData(request,id):
	print("idddddddddddddddddddddddd=",id)
	if request.method=="POST":
		print(">>>>>>>>>>>>>>>>",request.POST)
		try:
			studentDataUpdate=feeReceipt.objects.filter(id=id).update(gross_amount=request.POST['fee_gross_amount'],
			discount_amount=request.POST['fee_discount_amount'],net_amount=request.POST['fee_net_amount'],monthsTospan=request.POST['fee_monthsTospan'],
			year=request.POST['fee_Year'],collectorId=request.POST['fee_collectorId'])
			return HttpResponse('success')		
		except Exception as e:
			print("e=",e)

	receiptData=feeReceipt.objects.filter(id=id)	
	receiptId=feeReceipt.objects.all()

	for dateRec in receiptData:
		oldDate=dateRec.date
		NewDate = oldDate.strftime('%m-%d-%Y')	
		print("old and new==========",oldDate,NewDate)
	return render(request,'ManagerDash/updateFeeReceipt.html',{'NewDate':NewDate,'receiptData':receiptData,'receiptId':receiptId})

	


# //////////////  End ManagerDashboard Views //////////////