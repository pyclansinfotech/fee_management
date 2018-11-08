from django.db import models
from django.contrib.auth.models import User 

class managerRegister(models.Model):
	user = models.ForeignKey(User,null=True, on_delete=models.CASCADE)	
	phone = models.CharField(max_length=20,blank=True)
	center = models.CharField(max_length=20,blank=True)   
	batch = models.CharField(max_length=50, blank=True)
	name = models.CharField(max_length=50,blank=True)  
	 
class paymentModel(models.Model):		
	firstname = models.CharField(max_length=50,blank=True)
	ExMatFee = models.CharField(max_length=50,blank=True) 
	termFeeJan=models.CharField(max_length=50,blank=True) 
	termFeeMay=models.CharField(max_length=50,blank=True) 
	termFeeSep=models.CharField(max_length=50,blank=True) 
	fathername = models.CharField(max_length=50,blank=True)
	phone_no=models.CharField(max_length=20,blank=True)
	ExamFee = models.CharField(max_length=50,blank=True) 	 
	email= models.EmailField(max_length=50,blank=True) 
	birthdate= models.DateField(max_length=20,blank=True) 
	feeSubDate= models.DateField(max_length=20,blank=True) 
	gender= models.CharField(max_length=20,blank=True) 
	managerType=models.CharField(max_length=20,blank=True)


class center(models.Model):
	name = models.CharField(max_length=45,blank=True)
	address1 = models.CharField(max_length=200,blank=True) 
	address2=models.CharField(max_length=200,blank=True) 
	postcode=models.CharField(max_length=10,blank=True) 
	phone1=models.CharField(max_length=14,blank=True) 
	phone2 = models.CharField(max_length=14, blank=True)
	email=models.CharField(max_length=45,blank=True)
	manager = models.CharField(max_length=45,blank=True) 	 
	Type= models.CharField(max_length=25,blank=True)
	status = models.IntegerField(blank=True) 
	validTill= models.DateField(blank=True, null=True)


#//////////////////////   Doubts /////////////////////////////////////////////////////////////
class batch(models.Model):
	# idCenter=models.ForeignKey(center,on_delete=models.CASCADE)
	day= models.CharField(max_length=25,blank=True)
	time = models.TimeField(blank=True) 
	room= models.IntegerField(blank=True, null=True)
	center=models.CharField(max_length=45,blank=True)	
	centerName=models.CharField(max_length=25,blank=True)

# doubt///////////////////////////////////////////

	# idci = models.ForeignKey(student,to_field="idci",on_delete=models.CASCADE) 

# //////// end /////////////

	students = models.IntegerField(blank=True) 
	levels = models.IntegerField(blank=True)
 

class student(models.Model):
	first_name = models.CharField(max_length=45,blank=True,null=True)
	second_name = models.CharField(max_length=45,blank=True) 
	idcenter=models.ForeignKey(center,on_delete=models.CASCADE,null=True)
	idbatch=models.ForeignKey(batch,on_delete=models.CASCADE,null=True)

	#///////////////////////////// doubt ////////////////////////////////////////////////////////////////////
	idLevel=models.IntegerField(blank=True) 
	idci=models.IntegerField(blank=True)
	idlevel_certified=models.IntegerField(null=True,blank=True) 
	status=models.IntegerField(blank=True) 
	level_classes_done=models.IntegerField(blank=True) 
	school_type=models.CharField(max_length=40,blank=True)
	special_need=models.IntegerField(blank=True) 
	special_need_note=models.CharField(max_length=300,blank=True)
	idClass=models.IntegerField(blank=True) 
	#////////////////     end //////////////////////////////////////////////////////////////////////
	
	phone1= models.CharField(max_length=14,blank=True)
	phone2= models.CharField(max_length=14,blank=True)
	parent_name= models.CharField(max_length=45,blank=True)
	address1= models.CharField(max_length=200,blank=True)
	address2= models.CharField(max_length=200,blank=True)
	postcode=models.CharField(max_length=10,blank=True)
	email=models.EmailField(max_length=100,blank=True) 
	school_name=models.CharField(max_length=200,blank=True)
	school_year=models.IntegerField(blank=True) 
	joined_date=models.DateTimeField(blank=True, null=True)
	gender=models.CharField(max_length=200,blank=True)
		

# //////////////// Foreign key done /////////////////////////////

class checker(models.Model):
	FromDate=models.DateField(blank=True) 
	ToDate=models.DateField(blank=True) 
	Type=models.CharField(blank=True,max_length=40,) 
	Description=models.CharField(max_length=200,null=True)
	FeeReceived=models.FloatField(blank=True) 
	FeeChecked=models.FloatField(null=True)
	TranPending=models.PositiveSmallIntegerField(null=True)



class feeReceipt(models.Model):
	# idCenter=models.ForeignKey(center,on_delete=models.CASCADE) 
	# idstudent=models.ForeignKey(student,on_delete=models.CASCADE)
	receipt=models.IntegerField(blank=True) 
	date=models.DateTimeField(blank=True, null=True)
	feeType=models.CharField(max_length=45,blank=True)
	gross_amount=models.FloatField(null=True)
	discount_amount=models.FloatField(null=True)
	discount_note=models.CharField(max_length=100,blank=True)
	net_amount=models.FloatField(null=True)
	monthsTospan=models.IntegerField(blank=True) 
	modeOfPayment=models.CharField(max_length=20,blank=True)
	reference=models.CharField(max_length=45,blank=True)
	year=models.IntegerField(blank=True) 
	collectorId=models.IntegerField(blank=True) 
	checked=models.PositiveSmallIntegerField(blank=True) 
	# idTranCheckSum=models.ForeignKey(checker,on_delete=models.CASCADE) 


class uploaded(models.Model):
	TranDate=models.DateField(blank=True)
	RefTran1=models.CharField(max_length=45,null=True)
	RefTran2=models.CharField(max_length=45,null=True)
	RefTran3=models.CharField(max_length=45,null=True)
	RefTran4=models.CharField(max_length=45,null=True)
	Amount=models.FloatField(null=True)
	# idTRanCheckSum=models.ForeignKey(checker,on_delete=models.CASCADE,blank=True, null=True) 
	checked=models.PositiveSmallIntegerField(null=True)


class feeRegister(models.Model):
	idstudent=models.ForeignKey(student,on_delete=models.CASCADE) 
	year=models.IntegerField(blank=True)
	m1=models.IntegerField(blank=True)
	m2=models.IntegerField(blank=True)
	m3=models.IntegerField(blank=True)
	m4=models.IntegerField(blank=True)
	m5=models.IntegerField(blank=True)
	m6=models.IntegerField(blank=True)
	m7=models.IntegerField(blank=True)
	m8=models.IntegerField(blank=True)
	m9=models.IntegerField(blank=True)
	m10=models.IntegerField(blank=True)
	m11=models.IntegerField(blank=True)
	m12=models.IntegerField(blank=True)
	status=models.IntegerField(blank=True)

# ////////////////////////////////////////////////////////////

	