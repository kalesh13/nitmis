from django.views import View
from django.shortcuts import render


class Login(View):
    ##
    # Render the login layout
    ##
    def get(self, request):
        return render(request, 'base.html')
