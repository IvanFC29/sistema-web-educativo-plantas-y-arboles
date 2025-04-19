from django.urls import path, include
from rest_framework import routers
from .views import UsuarioVista, PlantaVista, ProgresoVista, PublicacionVista, RespuestaVista

router = routers.DefaultRouter()
router.register(r'usuario', UsuarioVista)
router.register(r'planta', PlantaVista)
router.register(r'progreso', ProgresoVista)
router.register(r'publicacion', PublicacionVista)
router.register(r'respuesta', RespuestaVista)

urlpatterns = [
    path('api/v1/', include(router.urls))
]