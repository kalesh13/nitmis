from django.urls import path
from nitmis_admin.controllers.login import Login
from nitmis_admin.controllers.events import EventsController

urlpatterns = [
    path('events', EventsController.as_view(), name='events'),
    path('login', Login.as_view(), name='api_login'),
]
