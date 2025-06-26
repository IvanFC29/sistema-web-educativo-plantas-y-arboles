from django.urls import path, include
from rest_framework import routers
from .views import PlantaVista, ProgresoVista, AporteVista, AprendizajeVista, MensajeVista
from .resources.buscador_view import buscar_descripcion
from .views import register, login, profile

router = routers.DefaultRouter()
router.register(r'planta', PlantaVista)
router.register(r'progreso', ProgresoVista)
router.register(r'aporte', AporteVista)
router.register(r'aprendizaje', AprendizajeVista)
router.register(r'mensaje', MensajeVista)

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api/v1/buscar_descripcion/', buscar_descripcion, name='buscar_descripcion'), 
    path('api/v1/registrar_usuario', register, name='registrar_usuario'),
    path('api/v1/login', login, name='login'),
    path('api/v1/profile', profile, name='profile')
]