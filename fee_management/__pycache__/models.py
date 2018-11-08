from django.db import models
from django.contrib.auth.models import User 

class register(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)	
	phone = models.CharField(max_length=20,blank=True)
	center = models.CharField(max_length=20,blank=True)   
    manager = models.CharField(max_length=50, blank=True)
    name = models.CharField(max_length=50,blank=True)   
   