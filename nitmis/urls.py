"""nitmis URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
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
from django.urls import path

from nitmis_admin.controllers.dashboard import Dashboard
from nitmis_admin.controllers.login import Login

urlpatterns = [
    path('admin/', Dashboard.as_view(), name='dashboard'),
    path('admin/login/', Login.as_view(), name='login'),    
    path('admin/register/', 'base.html', name='register'),
    path('admin/<str:page>/', Dashboard.as_view(), name='page'),
    path('admin/<str:page>/<int:id>', Dashboard.as_view(), name='item'),
]
