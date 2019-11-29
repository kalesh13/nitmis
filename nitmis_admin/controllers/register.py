from django.views import View
from django.shortcuts import render


class Register(View):
    '''
    Parent register controller. Post requests create
    a general Guest account
    '''

    def get(self, request):
        '''
        Renders the base layout on GET request. Frontend
        handles the rendering of forms
        '''
        return render(request, 'base.html')

    def post(self, request):
        '''
        Registers a new user and assigns the user
        a Guest role.
        '''


class AdminRegister(Register):
    '''
    Register controller for administrators.
    '''

    def post(self, request):
        '''
        Overriden post function. Registers the user as
        an administrator
        '''
