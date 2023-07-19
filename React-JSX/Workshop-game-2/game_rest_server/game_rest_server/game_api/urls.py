from django.urls import path
from knox import views as knox_views
from game_rest_server.game_api.views import GamesListCreateView, \
    GameGetEditDeleteView, UserCreateListView, RegisterView, login_api, get_user_data, LoginAPI

urlpatterns = [
    path('games/', GamesListCreateView.as_view(), name='games'),
    path('games/<int:pk>', GameGetEditDeleteView.as_view(), name='single-game'),
    path('users/',  UserCreateListView.as_view(), name='users'),
    path('users/register/',  RegisterView.as_view(), name='register'),
    path('login/', login_api, name='login'),
    path('api/login/', LoginAPI.as_view(), name='api-login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('user/', get_user_data, name='user'),
]

