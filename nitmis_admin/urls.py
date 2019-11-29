from django.urls import path
from nitmis_admin.controllers.events import EventsController

urlpatterns = [
    path('events', EventsController.as_view(), name='events'),
]
