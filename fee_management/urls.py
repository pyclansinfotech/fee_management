"""fee_management URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import path, re_path, include
from django.conf.urls.static import static
from django.conf.urls import url
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    
# ///////////////////   Fee mgt here  //////////////////////////////////
    path('',views.fee_login), #login/home page
    path('BaseDashboard/', views.BaseDashboard),    
    path('signout/',views.signout),

# //////////////////    Admin urls      /////////////////////////////////   
    path('AdminDashboard/',views.AdminDashboard),
    path('ManagerRegister/',views.ManagerRegister),
    path('manager/',views.updateManager),
    path('updateManager/<int:id>/',views.getManagerData),
    path('CreateCenter/',views.CreateCenter),
    path('upload/',views.upload),
    path('ExcelUpload/',views.ExcelUpload),  
    path('checking/',views.checking),
    path('center/',views.updateCenter),
    path('updateCenter/<int:id>/',views.getCenterData),
    path('createBatch/',views.createBatch),
    path('batch/',views.updateBatch),
    path('batchUpdated/<int:id>/',views.getBatchData),    

# ////////////////// End Admin urls ///////////////////////////////////


# ////////////////// Manager urls ////////////////////////////////////

    path('ManagerDashboard/', views.ManagerDashboard),
    path('studentRegister/', views.studentRegister),    
    path('student/', views.updateStudent),
    path('studentUpdateData/<int:id>/', views.studentUpdateData),
    path('feeReceipt/', views.feeReceiptFun),
    path('receipt/', views.updateFeeReceipt),
    path('feeReceiptData/<int:id>/', views.feeReceiptData),
    
    


  

# ////////////////// End Manager urls ///////////////////////////////





]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
