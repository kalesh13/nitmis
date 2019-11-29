from django.views import View
from nitmis_admin.models import Events


class EventsController(View):
    """
    Handles creation, updation, removal and retreivel of
    Events. The routes are restricted to event cordinators
    and administrators.
    """

    def get(self, request):
        pass

    def post(self, request):
        pass

    def patch(self, request):
        pass

    def delete(self, request):
        """
        """
        event = Events.objects.get(id=request.get('id', ''))
