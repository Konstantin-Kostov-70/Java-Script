from django.urls import path

from game_rest_server.game_api.views import GamesListCreateView

urlpatterns = [
    path('games/', GamesListCreateView.as_view(), name='games')
]