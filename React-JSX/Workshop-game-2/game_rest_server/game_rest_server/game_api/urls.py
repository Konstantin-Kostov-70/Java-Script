from django.urls import path

from game_rest_server.game_api.views import GamesListCreateView, GameGetEditDeleteView

urlpatterns = [
    path('games/', GamesListCreateView.as_view(), name='games'),
    path('games/<int:pk>/', GameGetEditDeleteView.as_view(), name='single-game'),
]

