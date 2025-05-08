from django.urls import path, include
from rest_framework import routers
from .views import UsuarioVista, PlantaVista, ProgresoVista, AporteVista
from .resources.buscador_view import buscar_descripcion

router = routers.DefaultRouter()
router.register(r'usuario', UsuarioVista)
router.register(r'planta', PlantaVista)
router.register(r'progreso', ProgresoVista)
router.register(r'aporte', AporteVista)

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api/v1/buscar_descripcion/', buscar_descripcion, name='buscar_descripcion')
]