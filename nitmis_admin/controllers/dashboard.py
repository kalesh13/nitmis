from django.views import View
from django.shortcuts import render
from nitmis_admin.helpers.auth import Authenticated


class Dashboard(View):
    ##
    # Render the dashboard layout
    ##
    @Authenticated(roles=['EditCo'])
    def get(self, request):
        return render(request, 'base.html')
