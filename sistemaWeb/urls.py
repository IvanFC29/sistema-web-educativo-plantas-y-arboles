from django.urls import path, include
from rest_framework import routers
from .views import UsuarioVista, PlantaVista, ProgresoVista, AporteVista, AprendizajeVista, MensajeVista
from .resources.buscador_view import buscar_descripcion
# from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)

router = routers.DefaultRouter()
router.register(r'usuario', UsuarioVista)
router.register(r'planta', PlantaVista)
router.register(r'progreso', ProgresoVista)
router.register(r'aporte', AporteVista)
router.register(r'aprendizaje', AprendizajeVista)
router.register(r'mensaje', MensajeVista)

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api/v1/buscar_descripcion/', buscar_descripcion, name='buscar_descripcion'), 
    # path('api/v1/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'), 
    # path('api/v1/refresh/', TokenRefreshView.as_view(), name='token_refresh')
]