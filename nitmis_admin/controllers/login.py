from rest_framework.views import APIView
from django.views import View
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from nitmis_admin.models import Roles
from nitmis_admin.helpers.auth import Auth


class Login(APIView):
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
            return redirect('register_admin')
        return render(request, 'base.html')

    def post(self, request):
        '''
        Process the api login requests
        '''
        auth = Auth()
        return auth.login(request)
