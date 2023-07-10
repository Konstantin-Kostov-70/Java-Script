from django.db import models


class Games(models.Model):
    title = models.CharField(
        max_length=30
    )
    category = models.CharField(
        max_length= 20
    )
    maxLevel = models.IntegerField()
    imageUrl = models.URLField()
    summary = models.TextField()
    created_on = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title