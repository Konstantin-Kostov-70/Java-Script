from rest_framework import serializers
from game_rest_server.game_api.models import Games


class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = '__all__'
