from django.contrib import admin
from .models import Article


# Register your models here.

# admin.site.register(Article)


@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display = ('title', 'description')

    def delete_queryset(self, request, queryset):
        queryset.delete()
