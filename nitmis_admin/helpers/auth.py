from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from nitmis_admin.helpers.json import JsonCheck


class Auth:
    def check(self, request):
        user = self.user(request)

        return user is not None

    def user(self, request):
        if(request.POST.get('_token', '')):
            return True

    def hasRole(self, request, role=None):
        if(role is None):
            return True

        user = self.user(request)


# -------------------------------------------------------------
# Decorators
# -------------------------------------------------------------
#
# Decorator for Auth check. Simply putting Authenticated as a
# decorator over the controller function checks for
# the request authentication status


def Authenticated(roles=None):
    def wrapper(func):
        def function_executer(*args, **kwargs):
            # Authentication handler
            auth = Auth()
            # Get the currently authenticated user from the
            # request. args[1] holds the request object
            user = auth.user(args[1])
            expectsJson = JsonCheck.expectsJson(args[1])
            #
            # Check if the auth check returned a valid user or not.
            # If not then return a 401 unauthenticated error or redirect
            # to the login page
            if not user:
                if expectsJson:
                    return JsonResponse({"message": "Unauthenticated"}, status=401)
                else:
                    return HttpResponseRedirect('login')

            # Check if the authenticated user has the permission
            # to process the function

            # At this point the user authentication and user access
            # levels have been successfully verified. Proceed with the
            # execution of function
            result = func(*args, **kwargs)
            return result
        return function_executer
    return wrapper
