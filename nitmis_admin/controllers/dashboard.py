from django.views import View
from django.shortcuts import render
from nitmis_admin.helpers.auth import authenticated


class Dashboard(View):
    '''Render the dashboard layout'''

    #@authenticated()
    def get(self, request, page=None, id=None):
        '''
        Sends base html document to the authenticated user. If the
        user is not authenticated, the request is redirected to the
        login page or a 401 unauthenticated json response is returned.

        No roles are passed as argument to the decorator as this
        layout has to be send to every user.
        '''
        return render(request, 'base.html')
