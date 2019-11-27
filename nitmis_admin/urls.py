from django.urls import path
from nitmis_admin.controllers import dashboard

'''
Register different admin routes.
'''
urlpatterns = [
    path('', dashboard.index, name='dashboard'),
]
