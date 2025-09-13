from django.urls import path, include
from rest_framework import routers
from .views import PlantaVista, ProgresoVista, AporteVista, AprendizajeVista, MensajeVista
from .resources.buscador_view import buscar_descripcion
from .resources.olvide_password import generar_token, reset_password
from .views import register, login, profile, totalPlantas, totalAportes

router = routers.DefaultRouter()
router.register(r'planta', PlantaVista)
router.register(r'progreso', ProgresoVista)
router.register(r'aporte', AporteVista)
router.register(r'aprendizaje', AprendizajeVista)
router.register(r'mensaje', MensajeVista)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/buscar_descripcion/', buscar_descripcion, name='buscar_descripcion'), 
    path('api/generar_token/', generar_token, name='generar_token'),
    path('api/reset_password/<uidb64>/<token>/', reset_password, name='reset_password'),
    path('api/registrar_usuario', register, name='registrar_usuario'),
    path('api/login', login, name='login'),
    path('api/profile', profile, name='profile'),
    path('api/total-plantas',  totalPlantas,  name='plantasTotales'), 
    path('api/total-aportes', totalAportes, name='totalAportes')
]