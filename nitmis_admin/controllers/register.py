from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render
from django.http.response import JsonResponse
from nitmis_admin.serializers.UserSerializer import UserSerializer


def create_user(role="Guest"):
    """
    """
    def fun_wrapper(func):
        def wrapper(*args, **kwargs):
            serializer = UserSerializer(data=args[1].data)
            #
            # If the data is valid, create a new user
            # and return the access token details.
            if serializer.is_valid():
                serializer.save(role=role)
                return JsonResponse(serializer.data)
            return JsonResponse({"errors": serializer.errors}, status=422)
        return wrapper
    return fun_wrapper


class Register(APIView):
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

    @create_user()
    def post(self, request):
        '''
        Registers a new user and assigns the user
        a Guest role.
        '''


class AdminRegister(Register):
    '''
    Register controller for administrators.
    '''

    @create_user(role="Administrator")
    def post(self, request):
        '''
        Overriden post function. Registers the user as
        an administrator
        '''
