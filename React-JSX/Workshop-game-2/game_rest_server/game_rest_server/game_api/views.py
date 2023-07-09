from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
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
        post_game_serializer = GamesSerializer(data=request.data)
        if post_game_serializer.is_valid():
            post_game_serializer.save()
            return Response(post_game_serializer.data, status=status.HTTP_200_OK)
        return Response({'message': "not correct data"}, status=status.HTTP_400_BAD_REQUEST)


class GameGetEditDeleteView(APIView):
    def get(self, request, pk):
        try:
            game = Games.objects.get(pk=pk)
            get_game_serializer = GamesSerializer(game)
            return Response(get_game_serializer.data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'message': 'not found'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        try:
            game = Games.objects.get(pk=pk)
            put_game_serializer = GamesSerializer(game, data=request.data)
            if put_game_serializer.is_valid():
                put_game_serializer.save()
                return Response(put_game_serializer.data, status=status.HTTP_200_OK)
            return Response({'message': put_game_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        except ObjectDoesNotExist:
            return Response({'message': 'not found'}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            game = Games.objects.get(pk=pk)
            game.delete()
            return Response(status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response({'message': 'not found'}, status=status.HTTP_204_NO_CONTENT)
