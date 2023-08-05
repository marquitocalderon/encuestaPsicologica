from django.urls import path
from .views import Usuario_API, Datospersonales_API, Psicologia_API

urlpatterns = [
    path('usuarios/', Usuario_API.as_view(), name='usuarios'),
    path('usuarios/<int:id>/', Usuario_API.as_view(), name='usuarios'),
    path('datospersonales/', Datospersonales_API.as_view(), name='datos'),
    path('datospersonales/<int:id>/', Datospersonales_API.as_view(), name='datos'),
    path('psicologia/', Psicologia_API.as_view(), name='psicologia'),
    path('psicologia/<int:id>/', Psicologia_API.as_view(), name='psicologia'),
]
