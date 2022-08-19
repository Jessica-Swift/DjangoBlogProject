from django.contrib import admin
from django.urls import path, include

# 30:34
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),
]
