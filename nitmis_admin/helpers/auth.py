from typing import Optional
from django.http import JsonResponse
from django.shortcuts import redirect
from nitmis_admin.helpers.request import RequestCheck
from nitmis_admin.models import User, Tokens
from nitmis_admin.serializers.TokenSerializer import TokenSerializer


class Auth:
    """
    Handles all the authentication related tasks. A user
    is assumed to be authenticated if the request contains a
    _token field and this token has not expired. During login
    process, we create a new token and send it as response to the
    user. User has to send this token with all requests. To logout
    a user, simply update the expiry of the token in database.

    The logged in user can be retreived by checking the presence of
    _token and its associated user.
    """

    def login(self, request) -> JsonResponse:
        token = self.issue_token(request)

        if token:
            response = JsonResponse(TokenSerializer(token).data)
            response.set_cookie('_token', token.token)
            return response
        return JsonResponse({"errors": {"password": "Invalid credentials"}}, status=400)

    def issue_token(self, request) -> Tokens:
        email = request.data.get('email', '')
        password = request.data.get('password', '')

        user = User.objects.get(email=email, password=password)

        if user:
            return Tokens.new_token(user)

    def user(self, request) -> Optional[User]:
        """
        Gets the logged in user model based on the
        request token. User will be returned only if the
        token has not expired and is valid.
        """
        token_model = self.token_model_from_request(request)
        if token_model:
            # If token_model is valid return the user associated
            # with it.
            return token_model.user
        return None

    def token_model_from_request(self, request) -> Optional[Tokens]:
        """
        Returns the token model from the request
        """
        token = self.token_from_request(request)
        print("Printing token")
        print(token)
        if token:
            token_models = Tokens.from_token(token)
            # If token_model is valid return the user associated
            # with it.
            if token_models and token_models.exists():
                return token_models[0]
        return None

    def token_from_request(self, request) -> Optional[str]:
        """
        Checks for the presence of token in headers, cookies
        and parameters. This token determines whether a user
        is authorized to make requests or not.
        """
        # Check if the request contains token in cookies
        token = request.COOKIES.get('_token', '')
        if token:
            return token

        # Check if the request contains token in query
        token = request.GET.get('_token', '')
        if token:
            return token

        # Check if the request contains token in POST data
        token = request.POST.get('_token', '')
        if token:
            return token

        # Check if the request contains token in the
        # Authorization header.
        token = RequestCheck.bearer_token(request)
        if token:
            return token
        return None

    def logout(self, request) -> None:
        """
        Logs out an authenticated user by expiring
        the user access token
        """
        token_model = self.token_model_from_request(request)
        if token_model:
            token_model.expire()


# -------------------------------------------------------------
# Decorators
# -------------------------------------------------------------
#

def authenticated(roles=None):
    """
    Decorator for Auth check. Simply putting Authenticated as a
    decorator over the controller function checks for
    the request authentication status
    """
    def wrapper(func):
        def function_executer(*args, **kwargs):
            # Authentication handler
            auth = Auth()
            # Get the currently authenticated user from the
            # request. args[1] holds the request object
            user = auth.user(args[1])
            expects_json = RequestCheck.expects_json(args[1])
            #
            # Check if the auth check returned a valid user or not.
            # If not then return a 401 unauthenticated error or redirect
            # to the login page
            if not user:
                if expects_json:
                    return JsonResponse({"message": "Unauthenticated"}, status=401)
                return redirect('login')

            # Check if the authenticated user has the permission
            # to process the function
            if not user.has_role(roles):
                return JsonResponse({"message": "You don't have access to this section"}, status=403)

            # At this point the user authentication and user access
            # levels have been successfully verified. Proceed with the
            # execution of function
            result = func(*args, **kwargs)
            return result
        return function_executer
    return wrapper
