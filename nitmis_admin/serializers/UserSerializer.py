from rest_framework.serializers import ModelSerializer
from nitmis_admin.models import User, Roles


class UserSerializer(ModelSerializer):
    """
    User Model serializer
    """
    class Meta:
        model = User
        fields = '__all__'
        depth = 1
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        role = validated_data.pop('role')
        user = User.objects.create(**validated_data)
        Roles.objects.create(role=role, user=user)
        return user
