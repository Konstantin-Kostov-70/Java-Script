from django.contrib import admin

from game_rest_server.game_api.models import Games


@admin.register(Games)
class GamesAdmin(admin.ModelAdmin):
    pass
