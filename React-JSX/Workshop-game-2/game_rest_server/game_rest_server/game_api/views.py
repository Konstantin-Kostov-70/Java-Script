from rest_framework.response import Response
from rest_framework.views import APIView

from game_rest_server.game_api.models import Games
from game_rest_server.game_api.serializers import GamesSerializer


class GamesListCreateView(APIView):
    def get(self, request):
        games = Games.objects.all()
        get_game_serializer = GamesSerializer(games, many=True)
        return Response(get_game_serializer.data)

    def post(self, request):
        pass
