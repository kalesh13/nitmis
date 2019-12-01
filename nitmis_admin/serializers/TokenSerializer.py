from rest_framework.serializers import ModelSerializer
from nitmis_admin.models import Tokens
from nitmis_admin.serializers.UserSerializer import UserSerializer


class TokenSerializer(ModelSerializer):
    user = UserSerializer()

    """
    Token model serializer
    """
    class Meta:
        model = Tokens
        fields = '__all__'
        depth = 1
