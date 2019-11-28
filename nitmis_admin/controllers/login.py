from django.views import View
from django.http import HttpResponseRedirect
from django.shortcuts import render
from nitmis_admin.models import Roles


class Login(View):
    '''
    Render the login layout
    '''

    def get(self, request):
        '''
        Checks for the presence of any administrator account. If
        an account is present, then the base layout is send.
        Otherwise, the request is redirected to a signup page.
        '''
        if not Roles.objects.filter(role__iexact='Administrator').exists():
            return HttpResponseRedirect('register')
        return render(request, 'base.html')
